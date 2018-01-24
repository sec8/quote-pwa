import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const QuoteListing = (props) => {
  const { data } = props;

  return (
    <div>
      <Typography type="body2" gutterBottom>
        {data.quoteText}
      </Typography>
      <Typography type="body1">
        - {data.quoteAuthor}
      </Typography>
      <Divider />
    </div>
  )
}

export default QuoteListing;


