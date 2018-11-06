import React from 'react';
import Button from '@material-ui/core/Button';


const FooterItem = ({item}) => {
return (
  <Button className="button">{item.label}</Button>
  )
}
export default FooterItem;
