---
layout: single
title:  "Matplotlib animation bliting"
date:   "2021-8-28 00:42:17 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210828004409.png
---

## prerequisite

- `matplotlib==3.2.2`, cause this [issue](https://github.com/matplotlib/matplotlib/issues/19040)

## Using blitting method to speed up animation rendering

### Method 1, using method

- Follow this link
  - [Making Animations Quickly with Matplotlib Blitting - alexgude.com](https://alexgude.com/blog/matplotlib-blitting-supernova/)

```python
def init_fig(fig, ax, artists):
    """Initialize the figure, used to draw the first
    frame for the animation.
    """
    ax.set_title("Supernova 2011fe Spectrum", fontsize=22)
    ax.set_xlabel("Wavelength [Å]", fontsize=20)
    plt.xlim(-10, 100)
    plt.ylim(-10, 100)

    return artists

def frame_iter(start, end):
    """Iterate through the days of the spectra and return
    flux and day number.
    """
    for i in range(start, end):
        yield (i, f"n: {i}")

def update_artists(frames, artists):
    """Update artists with data from each frame."""
    i, title = frames

    artists.widget.set_offsets([[0, i], [60, i]])
    artists.day.set_text(title)
    return [artists]

```

```ipynb
%matplotlib agg
fig, ax = plt.subplots(figsize=(12, 6), dpi=80)
sns.set_theme()
sns.set_color_codes()
# 2. Initialize the artists with empty data
Artists = namedtuple("Artists", ("widget", "day"))
artists = Artists(
    plt.scatter([], [], animated=True),
    ax.text(x=0.987, y=0.955, s=""),
)

# 3. Apply the three plotting functions written above
init = partial(init_fig, fig=fig, ax=ax, artists=artists)
step = partial(frame_iter, start=-15, end=25)
update = partial(update_artists, artists=artists)

#4. Generate the animation
anim = animation.FuncAnimation(
    fig=fig,
    func=update,
    frames=step,
    init_func=init,
    save_count=len(list(step())),
    repeat_delay=5000,
)
HTML(anim.to_html5_video())
```

- 其中`matplotlib agg`用于关闭jupyter中的plot输出

```ipynb
%matplotlib agg
AnimatedScatter().show()
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829022646.png" alt="20210829022646"/>

### Method 2, using `blit` param inside `FuncAnimation`

```python
class AnimatedScatter(object):
    """An animated scatter plot using matplotlib.animations.FuncAnimation."""
    def __init__(self, numpoints=50):
        self.numpoints = numpoints
        self.stream = self.data_stream()

        # Setup the figure and axes...
        self.fig, self.ax = plt.subplots(figsize=(12, 6), dpi=80)
        # Then setup FuncAnimation.
        self.ani = animation.FuncAnimation(self.fig, self.update, interval=5, 
                                          init_func=self.setup_plot, blit=True)

    def setup_plot(self):
        """Initial drawing of the scatter plot."""
        x, y, s, c = next(self.stream).T
        self.scat = self.ax.scatter(x, y, c=c, s=s, vmin=0, vmax=1,
                                    cmap="jet", edgecolor="k")
        self.ax.axis([-10, 10, -10, 10])
        # For FuncAnimation's sake, we need to return the artist we'll be using
        # Note that it expects a sequence of artists, thus the trailing comma.
        return self.scat,
    
    def show(self):
        return HTML(self.ani.to_html5_video())
    
    def data_stream(self):
        """Generate a random walk (brownian motion). Data is scaled to produce
        a soft "flickering" effect."""
        xy = (np.random.random((self.numpoints, 2))-0.5)*10
        s, c = np.random.random((self.numpoints, 2)).T
        while True:
            xy += 0.03 * (np.random.random((self.numpoints, 2)) - 0.5)
            s += 0.05 * (np.random.random(self.numpoints) - 0.5)
            c += 0.02 * (np.random.random(self.numpoints) - 0.5)
            yield np.c_[xy[:,0], xy[:,1], s, c]

    def update(self, i):
        """Update the scatter plot."""
        data = next(self.stream)

        # Set x and y data...
        self.scat.set_offsets(data[:, :2])
        # Set sizes...
        self.scat.set_sizes(300 * abs(data[:, 2])**1.5 + 200)
        # Set colors..
        self.scat.set_array(data[:, 3])

        # We need to return the updated artist for FuncAnimation to draw..
        # Note that it expects a sequence of artists, thus the trailing comma.
        return self.scat,
```

```jupyter
%matplotlib agg
AnimatedScatter().show()
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829022917.png" alt="20210829022917"/>

### Method 3, using class

```python
class Widget:
    def __init__(self, artist, update):
        self.artist = artist
        self.update = update
        
    def redraw(self, i, *args, **kargs):
        self.update(self.artist, i, *args, **kargs)
        return [self.artist]
```

```python
%matplotlib agg
fig, (ax_left, ax_right) = plt.subplots(1, 2, figsize=(12, 6), dpi=80)
data = np.random.rand(100, 2)
widgets = []

widgets.append(Widget(ax_left.scatter([], [], animated=True), 
                      lambda art, n: art.set_offsets(data[:n, :])))

widgets.append(Widget(ax_right.plot([], [], animated=True)[0], 
                      lambda art, n: art.set_data(data[:n, 0], data[:n, 1])))

def redraw(n):
    return sum([widget.redraw(n) for widget in widgets], [])
        
def init_func():
    txt = ax_left.set_title("Init", fontsize=22)
    ax_left.set_xlim(-0.1, 1.1)
    ax_left.set_ylim(-0.1, 1.1)
    ax_right.set_xlim(-0.1, 1.1)
    ax_right.set_ylim(-0.1, 1.1)
    return [widget.artist for widget in widgets]
```

```python
ani = animation.FuncAnimation(fig, 
                              save_count=len(list(step())),
                              func=redraw,
                              init_func=init_func, 
                              frames=list(range(100)),
                              blit=True)
HTML(ani.to_html5_video())
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829023047.png" alt="20210829023047"/>
