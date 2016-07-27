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

| Option             | Description                                                                               | Default           |
|--------------------|-------------------------------------------------------------------------------------------|-------------------|
| sprite             | Path to sprite                                                                            | "sharetastic.svg" |
| popup              | Makes links open in a popup window                                                        | true              |
| services           | Object of services, you can add custom ones or overwrite elements of the default services |                   |

####Example
```
  {
    sprite: "sharetastic.svg",
    popup: true,
    services: {
      facebook: {
        name: 'Facebook',
        enabled: true,
        href: 'http://facebook.com',
        icon: {
          width: 10,
          height: 19,
          id: 'sharetastic-facebook'
        }
      }
    }
  }
```
Sharer links are auto generated for available services by default, however you can overwrite these if you wish to use sharetastic simply for social links. Current available services are:
- Facebook
- Instagram (Disabled by default, Required Param: href. To be used as social link only.)
- Twitter
- Pinterest
- LinkedIn
- Google Plus
- Tumblr
- Flickr (Disabled by default, Required Param: href. To be used as social link only.)
- Email

##Themes
There are four themes for sharetastic, `default` `simple` `reversed` and `text`. To use a theme other than the default one, simply add it's modifier class like so:
```
<div class="sharetastic sharetastic--simple"></div>
```
```
<div class="sharetastic sharetastic--reversed"></div>
```
```
<div class="sharetastic sharetastic--text"></div>
```
Or use a combination
```
<div class="sharetastic sharetastic--text sharetastic--simple"></div>
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
$sharetastic-instagram: #e1306c !default
$sharetastic-instagram-hover: darken($sharetastic-instagram, 10%) !default
$sharetastic-twitter: #1da1f2 !default
$sharetastic-twitter-hover: darken($sharetastic-twitter, 10%) !default
$sharetastic-pinterest: #bd081c !default
$sharetastic-pinterest-hover: darken($sharetastic-pinterest, 10%) !default
$sharetastic-linkedin: #00a0dc !default
$sharetastic-linkedin-hover: darken($sharetastic-linkedin, 10%) !default
$sharetastic-googleplus: #c53929 !default
$sharetastic-googleplus-hover: darken($sharetastic-googleplus, 10%) !default
$sharetastic-flickr: #ff0084 !default
$sharetastic-flickr-hover: darken($sharetastic-flickr, 10%) !default
$sharetastic-email: #F70C32 !default
$sharetastic-email-hover: darken($sharetastic-email, 10%) !default

$sharetastic-alignment: center !default
```

##License
Copyright (c) 2016 Simon Sturgess

Licensed under the MIT license.
