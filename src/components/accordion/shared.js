/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export const AccordionButton = ({ children, ...rest }) => (
  <div sx={styles.buttonToggle} {...rest}>
    {children}
  </div>
);

const styles = {
  accordionItem: {
    overflow: 'hidden',
    '+ .accordion-item': {
      mt: [3],
    },
  },
  buttonToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'headingSecondary',
    cursor: 'pointer',
    fontSize: [2, 2, 2, 2, 2, 18, 3],
    fontWeight: 500,
    letterSpacing: -0.5,
    position: 'relative',
    lineHeight: [1.5, 1.8],
  },
  accordionContent: {
    overflow: 'hidden',
    lineHeight: 2,
    mt: [4],
  },
};

const variants = {
  open: {
    height: 'auto',
    marginTop: 16,
  },
  closed: { height: 0, marginTop: 0 },
};

export function AccordionContents({ isOpen, ...props }) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      sx={styles.accordionContent}
      {...props}
    />
  );
}

export const AccordionItem = ({ isOpen, children, className, ...rest }) => (
  <div
    className={`accordion-item ${className}`}
    sx={styles.accordionItem}
    {...rest}
  >
    {children}
  </div>
);

export const preventClose = (state, changes) =>
  changes.type === 'closing' && state.openIndexes.length < 2
    ? { ...changes, openIndexes: state.openIndexes }
    : changes;

export const single = (state, changes) =>
  changes.type === 'opening'
    ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
    : changes;

export const combineReducers = (...reducers) => (state, changes) =>
  reducers.reduce((acc, reducer) => reducer(state, acc), changes);
