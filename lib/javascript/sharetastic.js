import SPRITE from './sprite'

class Sharetastic {
    constructor(element, options) {
        this.addSpriteToPage()
        this.element = element
        this.page = this.generateOpenGraph()
        this.options = this.generateOptions(options)
        this.element.classList.add('sharetastic', 'sharetastic--initialized')
    }

    addSpriteToPage() {
        const spriteExistsOnPage = document.querySelectorAll('.sharetastic__sprite').length > 0
        const wrapper = document.createElement('div')
        wrapper.classList.add('sharetastic__sprite')
        wrapper.innerHTML = SPRITE
        if(!spriteExistsOnPage) {
            document.body.insertBefore(wrapper, document.body.firstChild)
        }
    }

    getMetaContent(prop) {
        const meta = document.querySelector(`meta[property="${prop}"]`)
        return meta.getAttribute('content')
    }

    generateOpenGraph() {
        return {
            url: this.element.getAttribute('data-url') || this.getMetaContent('og:url'),
            title: this.element.getAttribute('data-title') || this.getMetaContent('og:title'),
            description: this.element.getAttribute('data-description') || this.getMetaContent('og:description'),
            image: this.element.getAttribute('data-image') || this.getMetaContent('og:image')
        }
    }

    generateUrl(append) {
        if (!this.page.url) return
        const prefix = append || ''
        return prefix + encodeURIComponent(this.page.url)
    }

    generateTitle(append) {
        if (!this.page.title) return
        const prefix = append || ''
        return prefix + encodeURIComponent(this.page.title)
    }

    generateDescription(append) {
        if (!this.page.description) return
        const prefix = append || ''
        return prefix + encodeURIComponent(this.page.description)
    }

    generateImage(append) {
        if (!this.page.image) return
        const prefix = append || ''
        return prefix + encodeURIComponent(this.page.image)
    }

    generateOptions(options) {
        const defaults = {
            popup: true,
            services: {
                facebook: {
                    order: 0,
                    name: 'Facebook',
                    href: `https://www.facebook.com/sharer/sharer.php?${this.generateUrl('u=')}${this.generateTitle('&title=')}${this.generateDescription('&description=')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-facebook'
                    }
                },
                instagram: false,
                twitter: {
                    order: 2,
                    name: 'Twitter',
                    href: `http://twitter.com/home?status=${this.generateTitle()}${this.generateUrl(' - ')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-twitter'
                    }
                },
                pinterest: {
                    order: 3,
                    name: 'Pinterest',
                    href: `http://pinterest.com/pin/create/link/?${this.generateUrl('url=')}${this.generateTitle('&description=')}${this.generateImage('&media=')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-pinterest'
                    }
                },
                linkedin: {
                    order: 4,
                    name: 'LinkedIn',
                    href: `https://www.linkedin.com/shareArticle?mini=true${this.generateUrl('&url=')}${this.generateTitle('&title=')}${this.generateDescription('&summary=')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-linkedin'
                    }
                },
                googleplus: {
                    order: 5,
                    name: 'Google +',
                    href: `https://plus.google.com/share?${this.generateUrl('url=')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-googleplus'
                    }
                },
                flickr: false,
                tumblr: {
                    order: 7,
                    name: 'Tumblr',
                    href: `http://www.tumblr.com/share/link?${this.generateUrl('&url=')}${this.generateTitle('&name=')}${this.generateDescription('&description=')}`,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-tumblr'
                    }
                },
                email: {
                    order: 8,
                    name: 'Email',
                    href: 'mailto:?Body=' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-email'
                    }
                },
                print: {
                    order: 9,
                    name: 'Print',
                    href: 'window.print()',
                    icon: {
                        width: 32,
                        height: 32,
                        id: 'sharetastic-print'
                    }
                }
            }
        }

        const exportOptions = Object.assign(defaults, options)

        if (this.element.hasAttribute('data-tweet')) {
            exportOptions.services.twitter.href = `http://twitter.com/home?status=${encodeURIComponent(this.element.getAttribute('data-tweet'))}`
        }

        return exportOptions
    }

    popup(url, width, height) {
        const left = (screen.width / 2) - (width / 2)
        const top = (screen.height / 2) - (height / 2)
        window.open(url, "", `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=${width},height=${height},left=${left},top=${top}`)
    }

    build() {
        this.serviceOrder.map((key) => {
            const action = key === 'print' ? 'onclick' : 'href'
            const link = document.createElement('a')
            const self = this
            const service = this.options.services[key]

            link.classList.add('sharetastic__button', `sharetastic__button--${key}`)
            link.setAttribute(action, service.href)
            link.setAttribute('target', '_blank')
            link.innerHTML = `<svg width="${service.icon.width}"" height="${service.icon.height}" class="sharetastic__icon"><use xlink:href="#${service.icon.id}"/></svg>${service.name}`

            if (key !== 'email' && key !== 'print' && this.options.popup) {
                link.addEventListener('click', (e) => {
                    e.preventDefault()
                    self.popup(e.target.getAttribute('href'), 500, 300)
                })
            }
            this.element.appendChild(link)
        })
    }

    sort() {
        this.serviceOrder = []
        Object.keys(this.options.services).map((k, i) => {
            Object.keys(this.options.services).map((key) => {
                if (this.options.services[key].order === i) {
                    this.serviceOrder.push(key)
                }
            })
        })
        this.build()
    }
}

export default Sharetastic