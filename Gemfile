source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll"
gem "therubyracer"
# Theme
gem "minimal-mistakes-jekyll"
# gem "jekyll-dash", "~> 2.0.0"
gem "github-pages", group: :jekyll_plugins
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