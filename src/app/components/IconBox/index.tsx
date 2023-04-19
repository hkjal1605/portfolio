/**
 *
 * IconBox
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BrokenImageIcon from 'app/assets/broken-image.png';

interface Props {
  fill?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  cursor?: string;
  width?: string;
  height?: string;
  children?: string;
  onClick?: React.MouseEventHandler;
  src: string;
  alt?: string;
  objectFit?: string;
  borderRadius?: string;
  ref?: React.RefObject<HTMLImageElement>;
}

const CustomImage = styled.img<Props>`
  fill: ${props => (props.fill ? props.fill : 'none')} !important;
  height: ${props => (props.height ? props.height : '22px')} !important;
  width: ${props => (props.width ? props.width : '22px')} !important;
  object-fit: ${props => (props.objectFit ? props.objectFit : 'cover')};
  margin-right: ${props =>
    props.marginRight ? props.marginRight : '0'} !important;
  margin-left: ${props =>
    props.marginLeft ? props.marginLeft : '0'} !important;
  margin-bottom: ${props =>
    props.marginBottom ? props.marginBottom : '0'}!important;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')} !important;
  cursor: ${props => (props.cursor ? props.cursor : 'default')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
  display: ${props => (props.src ? 'initial' : 'none')};

  &:hover {
    opacity: ${props => (props.cursor === 'pointer' ? 0.6 : 1)};
  }

  transition: all 0.3s;
`;

export const IconBox = memo((props: Props) => {
  return (
    <CustomImage
      ref={props.ref}
      {...props}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = BrokenImageIcon;
      }}
    />
  );
});
