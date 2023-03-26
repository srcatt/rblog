import styles from '@/styles/Home.module.scss'
import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
import BlogPost from "@/interfaces/blog-post";
import {getAllPosts} from "@/lib/api";

interface Props {
    allPosts: BlogPost[]
}

export default function Home({allPosts}: Props) {
    return (
        <Layout>
            <section className={styles.header}>
                <h1 className="top-0 left-0 text-5xl md:text-8xl">
                    zhlee&apos;s
                    <br/>
                    blog
                </h1>
                <p className="top-0 right-0">
                    in beta
                </p>
                <p className="bottom-0 left-0">code by zhlee<br/>powered by nextjs</p>
                <p className="bottom-0 right-0">scroll</p>
            </section>
            <section className="section">
                <div className="divider"/>
                <p className="section-title">recent posts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--margin)]">
                    {allPosts.length > 0 ? allPosts.map((value, index) => <PostCard key={index} title={value.title}
                                                                                    desc={value.excerpt}
                                                                                    image={value.cover}
                                                                                    time={value.author}
                                                                                    url={value.slug}/>) :
                        <h1>bruh, no posts</h1>}
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    let allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'excerpt',
        'cover'
    ])
    allPosts.slice(0, 4)

    return {
        props: {allPosts},
    }
}
