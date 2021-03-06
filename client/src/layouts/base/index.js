import React from 'react';
import {
  withRouter,
} from "react-router-dom";


// Styles
import {
  Layout
} from "./style";

const BaseLayout = ({
  children,
  id,
  className,
  ...rest
}) => {

  return (
    <Layout {...rest}>
      <div id={id} className={className}>
        {children}
      </div>
    </Layout>
  )
}

export default withRouter(BaseLayout);
