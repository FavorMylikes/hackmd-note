source 'https://rubygems.org'

gem "jekyll"
gem "github-pages"
gem "jekyll-theme-tactile"
gem "jekyll-dash", "~> 2.0.0"

group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.15.1"
    gem "jekyll-tagging"
    gem "jekyll-paginate"
    gem "kramdown-math-katex"
    gem "katex"
    gem "execjs"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
    gem "tzinfo", "~> 1.2"
    gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?