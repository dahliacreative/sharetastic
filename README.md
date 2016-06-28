#Sharetastic

_A simple jQuery social sharing plugin, styled with sass for easy customization_  
[http://dahliacreative.github.io/sharetastic/](http://dahliacreative.github.io/sharetastic/)


##Installation

###Bower
```
bower install --save jquery-sharetastic
```

##Usage

###HTML
```
<div class="sharetastic"></div>
```

###JS
```
$('.sharetastic').sharetastic();
```

##Options
There are a few options you can pass when you initialize sharetastic, these are:
```
{
  sprite: 'path/to/sprite',
  customFeeds: {
		myCustomFeed: {
			class: 'sharetastic__button sharetastic__button--myCustomFeed',
      			href: 'http://myCustomFeed.com',
      			target: '_blank',
      			icon: '<svg width="10" height="19" class="sharetastic__icon"><use xlink:href="#myCustomFeed"/></svg>'
		}
  },
  feeds: {
    facebook: true,
    twitter: true,
    linkedin: true,
    email: true
  }
}
```

##Themes
There are three themes for sharetastic, `default` `simple` and `reversed`. To use a theme other than the default one, simply add it's modifier class like so:
```
<div class="sharetastic sharetastic--simple"></div>
```
```
<div class="sharetastic sharetastic--reversed"></div>
```

##Adding a label
If you wish to add a label to sharetastic, simply place it inside your sharetastic container like so, I suggest giving it a BEM class which follows the sharetastic naming convention:
```
<div class="sharetastic">
  <span class="sharetastic__label">Share this:</span>
</div>
```

##Customization
Sharetastic has been written to be easily customized using Sass variables. To overwrite the defaults simply define your variables before the inclusion of `sharetastic.sass`.

###Available variables
```
$sharetastic-font-size: 13px !default
$sharetastic-font-color: #ccc !default
$sharetastic-font: sans-serif !default

$sharetastic-gutter: 4px !default
$sharetastic-size: 32px !default
$sharetastic-border-radius: 50% !default

$sharetastic-icon-fill: #fff !default
$sharetastic-facebook: #3a5795 !default
$sharetastic-facebook-hover: darken($sharetastic-facebook, 10%) !default
$sharetastic-twitter: #1da1f2 !default
$sharetastic-twitter-hover: darken($sharetastic-twitter, 10%) !default
$sharetastic-linkedin: #00a0dc !default
$sharetastic-linkedin-hover: darken($sharetastic-linkedin, 10%) !default
$sharetastic-email: #F70C32 !default
$sharetastic-email-hover: darken($sharetastic-email, 10%) !default
```

##License
Copyright (c) 2016 Simon Sturgess

Licensed under the MIT license.
