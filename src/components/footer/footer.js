/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              <Logo />
            </Box>
            <Box sx={styles.terms}>
              <Link path="#!">Terms of use</Link>
              <Text as="span">|</Text>
              <Link path="#!">Privacy</Link>
            </Box>
            <Text as="p" sx={styles.copyright}>
              Copyright by {new Date().getFullYear()} RedQ, Inc
            </Text>
          </Box>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    gap: [30, 30, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', 'block', 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    gridRow: ['3/4', '3/4', '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', '1/3', '1/2', '1/5', 'unset'],
  },
  logo: {
    textAlign: ['center', 'center', 'left', 'center'],
  },
  terms: {
    display: ['flex'],
    alignItems: [
      'center',
      'center',
      'center',
      'center',
      'flex-start',
      'center',
    ],
    flexDirection: ['row', 'row', 'row', 'row', 'column', 'row'],
    justifyContent: [
      'center',
      'center',
      'flex-start',
      'center',
      'center',
      'flex-start',
    ],
    mt: [4],
    a: {
      color: 'heading',
    },
    span: {
      display: [
        'inline-flex',
        'inline-flex',
        'inline-flex',
        'inline-flex',
        'none',
        'inline-flex',
      ],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3],
    textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
  },
};
