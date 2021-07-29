source "https://rubygems.org"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "jekyll", "~> 3.8.5"
gem "github-pages","~> 202" , group: :jekyll_plugins
# #>>>>>>>>>>>>>>>>>>>>>
# # If you have any plugins, put them here!
# gem "github-pages", group: :jekyll_plugins  # github page use
# # gem "jekyll"                              # localhost or not remote theme
# #>>>>>>>>>>>>>>>>>>>>>
gem "therubyracer"
# Theme
gem "minimal-mistakes-jekyll"
# gem "jekyll-dash", "~> 2.0.0"
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-tagging"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-algolia"

  gem 'jekyll-katex'
  gem "kramdown-math-katex"
  gem "katex"
  gem "execjs"

  # gem "github-pages" # require jekyll (= 1.1.2)
  gem "jekyll-include-cache"
  gem "github-pages"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?