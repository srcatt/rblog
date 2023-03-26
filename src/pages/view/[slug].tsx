import BlogPost from "@/interfaces/blog-post";
import markdownStyles from '@/styles/markdown-styles.module.css'
import {getAllPosts, getPostBySlug} from "@/lib/api";
import Layout from "@/components/layout";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({post, preview}: { post: BlogPost, preview?: boolean }) {
    return (
        <Layout title={post.title}>
            <article className="p-default">
                <h1 className="text-4xl md:text-5xl">{post.title}</h1>
                <p className="text-xl md:text-2xl">{post.author}</p>
                <div className="divider mt-default"/>
                <div
                    className={`${markdownStyles.markdown} mt-default`}
                    dangerouslySetInnerHTML={{__html: post.content}}
                />
            </article>
        </Layout>
    )
}


interface Params {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
