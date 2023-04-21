/**
 *
 * Text
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTheme } from 'styles/theme/ThemeProvider';

interface Props {
  letterSpacing?: string;
  fontWeight?: string;
  type?: string;
  size?: string;
  lineHeight?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  padLeft?: string;
  padRight?: string;
  cursor?: string;
  maxWidth?: string;
  width?: string;
  textTransform?: string;
  fontFamily?: string;
  children: any;
  onClick?: React.MouseEventHandler;
  theme?: any;
  color?: string;
}

const StyledText = styled.p<Props>`
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : '0'}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  color: ${props =>
    props.color
      ? props.color
      : !props.type
      ? props.theme.text
      : props.type === 'primary'
      ? props.theme.text
      : props.theme.textSecondary};
  font-size: ${props => (props.size ? props.size : '15')}px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '20')}px;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')}px;
  margin-right: ${props => (props.marginRight ? props.marginRight : '0')}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0')}px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')}px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'initial')};
  padding-right: ${props => (props.padRight ? props.padRight : '0')}px;
  padding-left: ${props => (props.padLeft ? props.padLeft : '0')}px;
  cursor: ${props => (props.cursor ? props.cursor : 'inherit')};
  font-family: ${props =>
    props.fontFamily
      ? props.fontFamily
      : parseInt(props.fontWeight || '400') <= 400
      ? 'CanelaTextRegular'
      : parseInt(props.fontWeight || '400') === 500
      ? 'CanelaTextMedium'
      : parseInt(props.fontWeight || '400') > 500
      ? 'CanelaTextBold'
      : 'System85Regular'};
  white-space: initial;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
  width: ${props => (props.width ? props.width : 'auto')};
  font-style: normal;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'none'};

  &:hover {
    opacity: ${props => (props.cursor === 'pointer' ? 0.6 : 1)};
  }

  transition: all 0.3s;
`;

export const Text = memo((props: Props) => {
  const { theme } = useTheme();

  return (
    <StyledText {...props} theme={theme}>
      {props.children}
    </StyledText>
  );
});
