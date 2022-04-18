import React, { FC } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Regular from '../../presentation/typography/regular-text';
import buttonStyles from '../../services/button';
import colors from '../../services/colors';
import { mvs } from '../../services/metrices';

type BProps = {
  title?: string;
  onClick?: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  icon?:string;
  props?: object;
};

const ButtonPrimary: FC<BProps> = ({
  title,
  onClick,
  style,
  textStyle,
  loading,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      style={{...buttonStyles.buttonPrimary, ...style}}
      onPress={onClick}
      activeOpacity={0.5}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={'small'} />
      ) : (
        <Regular
          {...props}
          label={title}
          style={{color: colors.white, ...textStyle}}
        />
      )}
    </TouchableOpacity>
  );
};
const ButtonSecondary: FC<BProps> = ({
  title,
  onClick,
  style,
  textStyle,
  loading,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      style={{...buttonStyles.buttonSecondary, ...style}}
      onPress={onClick}
      activeOpacity={0.5}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={'small'} />
      ) : (
        <Regular
          {...props}
          label={title}
          style={{color: colors.headerTitle, ...textStyle}}
        />
      )}
    </TouchableOpacity>
  );
};

const ButtonPlus: FC<BProps> = ({
  title,
  onClick,
  style,
  textStyle,
  loading,
  disabled = false,
  icon='plus',
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onClick} style={buttonStyles.plus_button} {...props}>
        <Icon name={icon} color={colors.primary} size={mvs(20)}/>
      </TouchableOpacity>
  )
};

const Buttons = {
  ButtonPrimary,
  ButtonSecondary,
  ButtonPlus
};
export default Buttons;
