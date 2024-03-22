import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "graphql-hooks";
import useTranslate from "Hooks/useTranslate";
import { Title, Subtitle, Col, Button } from "Common";

import S from "./style";
const POST_QUERY = (slug) => `{
  post(id:"${slug}")  {
    title
    publishedAt
    coverImage {url}
    content {html}
  }
}`;

const BlogPost = () => {
	const { t } = useTranslate();
	const id = location.hash.split("=")[1];
	const history = useHistory();

	const { loading, data } = useQuery(POST_QUERY(id));

	const post = data?.post;

	const postHasLoaded = !loading && post;
	useEffect(() => {
		if (postHasLoaded && post?.title) {
			window.document.title = `DS Morais > ${post.title}`;
			const element = document.getElementById("scroll-target");
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest",
				});
			}
		}
	}, [postHasLoaded, post?.title]);

	if (!loading && data.post === null) {
		return (
			<S.StyledContainer>
				<Title color="red">{t("error")}</Title>
				<Subtitle>{t("postNotFound")}</Subtitle>
				<Button onClick={() => history.push("/all-posts")}>
					{t("gotoAllPosts")}
				</Button>
			</S.StyledContainer>
		);
	}
	console.log(data);
	return (
		<S.StyledContainer>
			<div id="scroll-target" />
			{!postHasLoaded ? (
				<Title>{t("Loading")}</Title>
			) : (
				<Col>
					<img src={post.coverImage.url} alt="post cover" />
					<Title>{post.title}</Title>
					<Subtitle>{new Date(post.publishedAt).toLocaleDateString()}</Subtitle>
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: it comes as html from the backend 🫠 */}
					<S.Content dangerouslySetInnerHTML={{ __html: post.content.html }} />
				</Col>
			)}
		</S.StyledContainer>
	);
};

export default BlogPost;
