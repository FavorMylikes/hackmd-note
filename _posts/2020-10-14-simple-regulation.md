---
layout: post
title:  "Transcription Factors & Simple Regulation"
date:   2020-10-14 19:32:00 -0400
categories: biology systems-biology
katex: True
---
[HEAVILY UNFINISHED]
> Note: Much of this content is from [Introduction to Systems Biology].
> This merely restates it with information I felt was lacking, left implied, and potentially unclear.

> This comes partially from the perspective I initially came to the subject from. Very little biology, chemistry, or even calculus knowledge, but with existing experience with programming (though this post doesn't use that as much).

Note: There may be many parts of this that are incorrect as I am hardly knowledgeable about biology. Much of this comes from the book as mentioned above, or is found online and so any incorrect information is due to my own failure.  

In our cell, we have a gene. A gene is simply a strand of DNA that encodes information on how to construct a *protein*. A protein is essentially a large molecule that performs some function for the cell.  
![Image of Gene Y, a line with two boxes. One is unlabeled and the other reads "Binding Site".](/assets/images/gene_y.png)  
Here, we have a gene, $$Y$$, which we simply represent with a line. In reality it is a long - as you likely already know - chain in a helix pattern of several different kinds of molecules. Those specific types of molecules encode information which is used to construct the protein.
## How are these proteins constructed?
At first, the DNA is split from its combined double stranded from into two separate strands so as expose the nucleotides (the specific molecules that are chained together in DNA, the classic A/T/G/C letterings are the first letter of their names). This is performed by RNAp using the enzyme [helicase](https://en.wikipedia.org/wiki/Helicase). The RNAp then copies (called 'transcription', the verb form being 'transcribe') the gene's information into a 'scratch' location, the mRNA.  
This mRNA (which I'm still not sure if a new one is created anew everytime and if that is done by RNAp, or if there is just a bunch of scratch ones floating around).
TODO:WRITE MORE OF THIS PART!!
It really needs to talk about transcription factors.
  
The book covers hill functions in this chapter, but as those aren't used in this chapter we won't cover them here. I belive they are used more in the next.
  
  
You have a gene-Y.  
$$Y$$: Concentration of protein-Y (the protein generated when going through the transcription/translation stages for gene-Y).  
  
## Approximating Values
The author defines a dynamic equation for this relation: (where $$t$$ is time):
$$\frac{dY}{dt} = \beta - \alpha Y$$  
Now this is using calculus, scary.  
This is actually rather simple.  
+ $$\beta$$ (beta) is the production rate. The amount of protein-Y (concentration) per unit time.  
+ $$\alpha$$ (alpha) is the degradation rate. The amount of proten-Y that is destroyed through dilution (concentration is relative to the cell's volume as that can grow), or degradation (destruction of cell by other parts of the cell).  
  
So, if we have $$\alpha Y$$ then that is the part of $$Y$$ that degrades.  
Thus, we have the simple concept of "Production amount ($$\beta$$) minus the amount that was lost ($$\alpha Y$$)".
Note that this is an approximation, of which the author is more clear about in the lecture he performed about this topic[^2]. It simplifies reality by acting as if the values of $\beta$ are either at 0  
The fancy syntax, $$\frac{dY}{dt}$$ is a [*derivative*](https://www.mathsisfun.com/calculus/derivatives-introduction.html), which is essentially a method to acquire the slope (rise over run! the change in $$x$$ divided by the change in $$y$$!) which shows the relation between the two values. In this case, it is showing the relation between the concentration of protein-Y and $$t$$ime.  
Sadly, this isn't a post that tries to explain the calculus too much beyond linking to resources.  
The book then calculates the [steady state](https://en.wikipedia.org/wiki/Steady_state_(biochemistry)), which as it says can be calculated by setting  
$$\frac{dY}{dt} = 0$$  
While the book doesn't perform the steps, we will. Now, this is actually pretty easy as we don't need to touch the derivative part. Due to this definition we know that:  
$$0 = \beta - \alpha Y$$  
Which is just normal algebra. We are trying to isolate the concentration of Y that is the steady state, so we want to isolate the variable $$Y$$.   
Add $$\alpha Y$$ to both sides. $$\alpha Y = \beta$$  
Divide by $$\alpha$$. $$Y = \frac{\beta}{\alpha} (\alpha \ne 0)$$  
So now we know that it is simply the production rate divided by the degradation rate that lets us calculate what the steady-state value is, which the book defines as $Y_{st}$. Note that this value depends on the specific values of $\beta$ and $\alpha$ we are using and so can change over time.  
On page 14, the book introduces a new graph for the case where start from some arbitrary steady state and then go down to zero. This arrival towards zero is done by setting $\beta = 0$, thus letting it decrease over time as no further proteins are being produced.  
One thing that confused me when I first saw this was their use of $$Y_{st}$$. Here, the author uses $$Y_{st}$$ for the initial and then continues using it, even though the *actual* steady state (after we set $$\beta = 0$$) is *now* at 0. Afte rall, it is heading towards 0 and once it gets there it will stay at that position unless $$\beta$$ is modified again. As well, their calculation I think fails to show how generic the equation could be as it doesn't have to start at $$Y_{st}$$ (assuming that my math is correct and my logic isn't incorrect).  
So, we start with a value of $$Y_0$$ (what the author calls $$Y_{st}$$ in their examples), and have to solve the differential equation (that fancy $$\frac{dY}{dt}$$ formula from above).  
So,  
$$\frac{dY}{dt} = \beta - \alpha Y$$ where $$\beta = 0$$  
Since we know the value of $$\beta$$, we simply replace it.  
$$\frac{dY}{dt} = - \alpha Y$$  
Next, we can perform [Separation of Variables](https://www.mathsisfun.com/calculus/separation-variables.html), where we treat the derivative as a fraction.  
Multiply both sides by $$dt$$  
$$dY = -\alpha Y dt$$  
Since we want to isolate all the $$Y$$ terms on one side and all the $$t$$ terms on the other, now we simply want to divide by $$Y$$.  
$$\frac{dY}{Y} = -\alpha dt$$  
Now, since they are on separate ends we can [integrate](https://www.mathsisfun.com/calculus/integration-introduction.html) both sides of the equation.  
$$\int \frac{dY}{Y} = \int - \alpha dt$$  
Now, since $$\frac{a}{b} = \frac{1}{b} a$$, we can do this:  
$$\int \frac{1}{Y} dY = \int - \alpha dt$$  
Now through integration rules, the integral of a constant, $$-\alpha$$ is that constant times variable it is in relation to, that being $$t$$.  
$$\int \frac{1}{Y} dY = -\alpha t + C$$  
(Plus some unknown constant, $$C$$, since the derivative operation throws away lone constants, and since the integration is the reverse of differentiation (the action of doing a derivative), we have to keep that unkown in there).  
Then, through futher magical rules, we know $$\frac{1}{Y}$$ where $$Y$$ is the variable it is in relation to (see the $$dY$$!), that can be transformed into:  
$$\ln Y + D = -\alpha t + C$$ where $$D$$ is another constant that we have to keep around.  
$$\ln Y = -\alpha t + C - D$$ Move both constants to one side.  
$$A = C - D$$ Define another constant just to keep both those. Since they're both already unknown, this doesn't really change much beyond making it cleaner.  
$$\ln Y = -\alpha t + A$$  
Now, we want to isolate $$Y$$, and as we know:  
$$\ln a = b$$ can be converted into $$e^b = a$$, since $$e$$ ([Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant))) is the base of the natural logarithm ($$\ln$$).  
So, we can perform this shifting around of values:  
$$e^{-\alpha t + A} = Y$$  
Now, we've isolated $$Y$$! Huzzah! But, there's some cleaning up we can do.  
$$e^{-\alpha t + A} = e^{-\alpha t}e^A = Y$$  
This lets us perform the same 'constant cleanup' that we did before and define a new variable.  
$$Z = e^A = e^{C - D} = \frac{e^C}{e^D}$$  
$$e^{-\alpha t + A} = e^{-\alpha t}e^A = e^{-\alpha t} Z = Y = Ze^{-\alpha t} = Y$$  
$$Y(t) = Ze^{-\alpha t}$$  
Now, this looks pretty familiar doesn't it? Yet, what is that Z?  
Well, the original value $$Y_0$$ didn't actually appear anywhere in this equation. So, this is why I believe that in this case, $$Z$$, can be whatever initial concentration there is of $$Y$$ in the cell.  
So, for a general $$Y_0$$ being the starting concentration of $$Y$$ in the cell, we get:  
$$Y(t) = Y_0e^{-\alpha t}$$  
Now we have a magical function that lets us calculate the concentration of protein Y in the cell as it decreases ($$\beta$$ being 0!) over time from the initial starting state of $$Y_0$$. Lovely.  
  





[Introduction to Systems Biology]: https://www.amazon.com/Introduction-Systems-Biology-Mathematical-Computational-ebook-dp-B07V4NTWVV/dp/B07V4NTWVV/
*[DNA]: 'Deoxyribonucleic Acid'. Essentially 'instructions' that are used to build cell components. Double-stranded.
*[RNA]: 'Ribonucleic Acid'.
*[mRNA]: 'messenger RNA'. Single-strand molecule of RNA that holds the genetic information.


[^1]: Enzyme being a protein that acts as a catalyst and accellerates chemical reactions. Usually have suffix '-ase'. (Helic*ase*, Lact*ase*, RNA Polymer*ase*). (For More: https://www.youtube.com/watch?v=H_1ULIKzwfA, '*Enzymes: Nature's Factory Workers*')  