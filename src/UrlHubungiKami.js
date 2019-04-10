import React from 'react';
import Footer from './container/Footer';
import FormHubungiKami from './container/FormHubungiKami';
import CopyRight from './function/CopyRight';
import Menu from './container/Menu';

const UrlHubungiKami = () => {
  return(
    <div>
      <Menu/>
      <FormHubungiKami />
      <Footer />
      <CopyRight />
    </div>
  )
}

export default UrlHubungiKami
