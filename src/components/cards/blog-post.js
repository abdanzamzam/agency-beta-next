/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Image, Heading, Text } from 'theme-ui';
import chat from 'assets/images/icons/chat.png';
import { Link } from 'components/link';
import { rgba } from 'polished';

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image src={post?.thumb} alt={post?.title} />
      </Flex>
      <Box sx={styles.meta}>
        <Heading as="h3">
          <Link path={post.link}>{post?.title}</Link>
        </Heading>
        <Text as="span" sx={styles.commentCount}>
          <Image src={chat} alt="chat icon" />
          {post?.commentCount} Comments
        </Text>
      </Box>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    m: [0, 0, 0, '0 15px', 0],
    figure: {
      alignItems: 'flex-start',
      mb: ['10px', null, null, '15px', '25px'],
    },
    h3: {
      fontWeight: 500,
      fontSize: [18, null, null, null, null, null, 20],
      lineHeight: 1.5,
      a: {
        cursor: 'pointer',
      },
    },
  },
  commentCount: {
    display: 'flex',
    alignItems: 'center',
    mt: ['10px', '10px', '10px', '15px', '20px'],
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.6,
    color: rgba('#343D48', 0.8),
    img: {
      mr: '8px',
    },
  },
};
