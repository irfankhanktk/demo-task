import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Regular from '../../presentation/typography/regular-text';
import { TouchableOpacity, View } from 'react-native'
const DropDown = ({ value = 'apple', setValue, items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' }
],
setItems,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      disableBorderRadius
      style={{ borderWidth: 0, }}
    />

  );
}
export default DropDown;