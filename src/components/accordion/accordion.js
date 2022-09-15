/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Heading } from 'theme-ui';
import { BsArrowRight } from 'react-icons/bs';
import { BaseAccordion } from './base-accordion';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';
import { rgba } from 'polished';

export default function Accordion({ items, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <Fragment>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
              className={openIndexes.includes(index) ? 'is-open' : 'is-closed'}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <Heading as="h4">{item.title}</Heading>
                {!openIndexes.includes(index) && (
                  <BsArrowRight size="28px" color={rgba('#0F2137', 0.3)} />
                )}
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </Fragment>
      )}
    </BaseAccordion>
  );
}
