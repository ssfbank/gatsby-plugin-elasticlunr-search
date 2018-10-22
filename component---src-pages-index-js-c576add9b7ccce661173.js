;(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        139: function(e, t, a) {
            'use strict'
            a.r(t),
                a.d(t, 'default', function() {
                    return i
                }),
                a.d(t, 'pageQuery', function() {
                    return o
                })
            a(75), a(48)
            var n = a(0),
                r = a.n(n),
                d = a(142),
                c = a(149)
            function i(e) {
                var t = e.data.allMarkdownRemark.edges
                return r.a.createElement(
                    c.a,
                    null,
                    t
                        .filter(function(e) {
                            return e.node.frontmatter.title.length > 0
                        })
                        .map(function(e) {
                            var t = e.node
                            return r.a.createElement(
                                'div',
                                { key: t.id },
                                r.a.createElement(
                                    'h1',
                                    null,
                                    r.a.createElement(
                                        d.Link,
                                        { to: t.frontmatter.path },
                                        t.frontmatter.title
                                    )
                                ),
                                r.a.createElement('p', null, t.excerpt)
                            )
                        })
                )
            }
            var o = '1229648663'
        },
        142: function(e, t, a) {
            'use strict'
            a.r(t),
                a.d(t, 'graphql', function() {
                    return m
                }),
                a.d(t, 'StaticQueryContext', function() {
                    return l
                }),
                a.d(t, 'StaticQuery', function() {
                    return b
                })
            var n = a(0),
                r = a.n(n),
                d = a(4),
                c = a.n(d),
                i = a(141),
                o = a.n(i)
            a.d(t, 'Link', function() {
                return o.a
            }),
                a.d(t, 'withPrefix', function() {
                    return i.withPrefix
                }),
                a.d(t, 'navigate', function() {
                    return i.navigate
                }),
                a.d(t, 'push', function() {
                    return i.push
                }),
                a.d(t, 'replace', function() {
                    return i.replace
                }),
                a.d(t, 'navigateTo', function() {
                    return i.navigateTo
                })
            var s = a(143),
                f = a.n(s)
            a.d(t, 'PageRenderer', function() {
                return f.a
            })
            var u = a(33)
            a.d(t, 'parsePath', function() {
                return u.a
            })
            var l = r.a.createContext({}),
                b = function(e) {
                    return r.a.createElement(l.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : r.a.createElement(
                                  'div',
                                  null,
                                  'Loading (StaticQuery)'
                              )
                    })
                }
            function m() {
                throw new Error(
                    'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
                )
            }
            b.propTypes = {
                data: c.a.object,
                query: c.a.string.isRequired,
                render: c.a.func,
                children: c.a.func,
            }
        },
        143: function(e, t, a) {
            var n
            e.exports = ((n = a(145)) && n.default) || n
        },
        144: function(e) {
            e.exports = {
                data: {
                    site: {
                        siteMetadata: {
                            title:
                                'gatsby-plugin-elasticlunr-search example site.',
                        },
                    },
                },
            }
        },
        145: function(e, t, a) {
            'use strict'
            a.r(t)
            a(34)
            var n = a(0),
                r = a.n(n),
                d = a(4),
                c = a.n(d),
                i = a(50),
                o = a(2),
                s = function(e) {
                    var t = e.location,
                        a = o.default.getResourcesForPathnameSync(t.pathname)
                    return r.a.createElement(
                        i.a,
                        Object.assign({ location: t, pageResources: a }, a.json)
                    )
                }
            ;(s.propTypes = {
                location: c.a.shape({ pathname: c.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = s)
        },
        146: function(e) {
            e.exports = {
                data: {
                    siteSearchIndex: {
                        index: {
                            version: '0.9.5',
                            fields: ['title', 'tags'],
                            ref: 'id',
                            documentStore: {
                                docs: {
                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                        id:
                                            'e480260f-b77f-56f9-ab4e-9a66b8d17f7b',
                                        title: 'My First Gatsby Post',
                                        tags: ['incredible', 'article'],
                                    },
                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                        id:
                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7',
                                        title: 'My Second Gatsby Post',
                                        tags: ['amazing', 'article'],
                                    },
                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                        id:
                                            '27b48828-4198-54bc-b65e-461e990fefcd',
                                        title: 'My third Gatsby Post',
                                        tags: ['boring', 'article'],
                                    },
                                },
                                docInfo: {
                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                        title: 3,
                                        tags: 2,
                                    },
                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                        title: 3,
                                        tags: 2,
                                    },
                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                        title: 3,
                                        tags: 2,
                                    },
                                },
                                length: 3,
                                save: !0,
                            },
                            index: {
                                title: {
                                    root: {
                                        docs: {},
                                        df: 0,
                                        f: {
                                            docs: {},
                                            df: 0,
                                            i: {
                                                docs: {},
                                                df: 0,
                                                r: {
                                                    docs: {},
                                                    df: 0,
                                                    s: {
                                                        docs: {},
                                                        df: 0,
                                                        t: {
                                                            docs: {
                                                                'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                    tf: 1,
                                                                },
                                                            },
                                                            df: 1,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        g: {
                                            docs: {},
                                            df: 0,
                                            a: {
                                                docs: {},
                                                df: 0,
                                                t: {
                                                    docs: {},
                                                    df: 0,
                                                    s: {
                                                        docs: {},
                                                        df: 0,
                                                        b: {
                                                            docs: {},
                                                            df: 0,
                                                            i: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 3,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        p: {
                                            docs: {},
                                            df: 0,
                                            o: {
                                                docs: {},
                                                df: 0,
                                                s: {
                                                    docs: {},
                                                    df: 0,
                                                    t: {
                                                        docs: {
                                                            'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                tf: 1,
                                                            },
                                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                tf: 1,
                                                            },
                                                            '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 3,
                                                    },
                                                },
                                            },
                                        },
                                        s: {
                                            docs: {},
                                            df: 0,
                                            e: {
                                                docs: {},
                                                df: 0,
                                                c: {
                                                    docs: {},
                                                    df: 0,
                                                    o: {
                                                        docs: {},
                                                        df: 0,
                                                        n: {
                                                            docs: {},
                                                            df: 0,
                                                            d: {
                                                                docs: {
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 1,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        t: {
                                            docs: {},
                                            df: 0,
                                            h: {
                                                docs: {},
                                                df: 0,
                                                i: {
                                                    docs: {},
                                                    df: 0,
                                                    r: {
                                                        docs: {},
                                                        df: 0,
                                                        d: {
                                                            docs: {
                                                                '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                    tf: 1,
                                                                },
                                                            },
                                                            df: 1,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                tags: {
                                    root: {
                                        docs: {},
                                        df: 0,
                                        i: {
                                            docs: {},
                                            df: 0,
                                            n: {
                                                docs: {},
                                                df: 0,
                                                c: {
                                                    docs: {},
                                                    df: 0,
                                                    r: {
                                                        docs: {},
                                                        df: 0,
                                                        e: {
                                                            docs: {},
                                                            df: 0,
                                                            d: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 1,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        a: {
                                            docs: {},
                                            df: 0,
                                            r: {
                                                docs: {},
                                                df: 0,
                                                t: {
                                                    docs: {},
                                                    df: 0,
                                                    i: {
                                                        docs: {},
                                                        df: 0,
                                                        c: {
                                                            docs: {},
                                                            df: 0,
                                                            l: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 3,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            m: {
                                                docs: {},
                                                df: 0,
                                                a: {
                                                    docs: {},
                                                    df: 0,
                                                    z: {
                                                        docs: {
                                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 1,
                                                    },
                                                },
                                            },
                                        },
                                        b: {
                                            docs: {},
                                            df: 0,
                                            o: {
                                                docs: {},
                                                df: 0,
                                                r: {
                                                    docs: {},
                                                    df: 0,
                                                    e: {
                                                        docs: {
                                                            '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 1,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            pipeline: ['trimmer', 'stopWordFilter', 'stemmer'],
                        },
                    },
                },
            }
        },
        147: function(e, t, a) {},
        149: function(e, t, a) {
            'use strict'
            var n = a(144),
                r = a(0),
                d = a.n(r),
                c = a(4),
                i = a.n(c),
                o = a(150),
                s = a.n(o),
                f = a(142),
                u = a(146),
                l = (a(49), a(48), a(7)),
                b = a.n(l),
                m = a(151),
                p = (function(e) {
                    function t(t) {
                        var a
                        return (
                            ((a =
                                e.call(this, t) ||
                                this).getOrCreateIndex = function() {
                                return a.index
                                    ? a.index
                                    : m.Index.load(a.props.searchIndex)
                            }),
                            (a.search = function(e) {
                                var t = e.target.value
                                ;(a.index = a.getOrCreateIndex()),
                                    a.setState({
                                        query: t,
                                        results: a.index
                                            .search(t)
                                            .map(function(e) {
                                                var t = e.ref
                                                return a.index.documentStore.getDoc(
                                                    t
                                                )
                                            }),
                                    })
                            }),
                            (a.state = { query: '', results: [] }),
                            a
                        )
                    }
                    return (
                        b()(t, e),
                        (t.prototype.render = function() {
                            return d.a.createElement(
                                'div',
                                {
                                    style: {
                                        position: 'relative',
                                        marginLeft: 'auto',
                                        marginRight: '0',
                                        padding: '1.45rem 1.0875rem',
                                    },
                                },
                                d.a.createElement('input', {
                                    type: 'text',
                                    placeholder: 'Type title words or tags',
                                    value: this.state.query,
                                    onChange: this.search,
                                }),
                                d.a.createElement(
                                    'ul',
                                    {
                                        style: {
                                            position: 'absolute',
                                            width: '100%',
                                        },
                                    },
                                    this.state.results.map(function(e) {
                                        return d.a.createElement(
                                            'li',
                                            null,
                                            e.title,
                                            ': ',
                                            e.tags.join(',')
                                        )
                                    })
                                )
                            )
                        }),
                        t
                    )
                })(r.Component),
                g = function(e) {
                    var t = e.siteTitle
                    return d.a.createElement(f.StaticQuery, {
                        query: '1346230460',
                        render: function(e) {
                            return d.a.createElement(
                                'header',
                                {
                                    style: {
                                        background: 'rebeccapurple',
                                        marginBottom: '1.45rem',
                                    },
                                },
                                d.a.createElement(
                                    'div',
                                    {
                                        style: {
                                            margin: '0 auto',
                                            maxWidth: 960,
                                            padding: '1.45rem 1.0875rem',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        },
                                    },
                                    d.a.createElement(
                                        'h1',
                                        { style: { margin: 0 } },
                                        d.a.createElement(
                                            f.Link,
                                            {
                                                to: '/',
                                                style: {
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                },
                                            },
                                            t
                                        )
                                    ),
                                    d.a.createElement(p, {
                                        searchIndex: e.siteSearchIndex.index,
                                    })
                                )
                            )
                        },
                        data: u,
                    })
                },
                h = (a(147),
                function(e) {
                    var t = e.children
                    return d.a.createElement(f.StaticQuery, {
                        query: '2924840780',
                        render: function(e) {
                            return d.a.createElement(
                                d.a.Fragment,
                                null,
                                d.a.createElement(
                                    s.a,
                                    {
                                        title: e.site.siteMetadata.title,
                                        meta: [
                                            {
                                                name: 'description',
                                                content: 'Sample',
                                            },
                                            {
                                                name: 'keywords',
                                                content: 'sample, something',
                                            },
                                        ],
                                    },
                                    d.a.createElement('html', { lang: 'en' })
                                ),
                                d.a.createElement(g, {
                                    siteTitle: e.site.siteMetadata.title,
                                }),
                                d.a.createElement(
                                    'div',
                                    {
                                        style: {
                                            margin: '0 auto',
                                            maxWidth: 960,
                                            padding: '0px 1.0875rem 1.45rem',
                                            paddingTop: 0,
                                        },
                                    },
                                    t
                                )
                            )
                        },
                        data: n,
                    })
                })
            h.propTypes = { children: i.a.node.isRequired }
            t.a = h
        },
    },
])
//# sourceMappingURL=component---src-pages-index-js-c576add9b7ccce661173.js.map
