import { compose, omit } from 'ramda';
import { mapProps } from 'recompose';

export const omitProps = compose(mapProps, omit);
