import React from 'react'
import { Helmet } from 'react-helmet'
import { Typography } from '@mui/material'
import WrapperPages from './WrapperPages'

export default function PageAboutProject() {
  return (
    <>
      <Helmet>
        <title>Project Information</title>
      </Helmet>
      <WrapperPages>
        <Typography component="h3" color="primary" gutterBottom>
          Project Information
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum curabitur vitae
          nunc. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Sed risus
          ultricies tristique nulla aliquet enim tortor at. Pharetra convallis posuere morbi leo. Id
          faucibus nisl tincidunt eget nullam non nisi. Rhoncus est pellentesque elit ullamcorper
          dignissim. Non diam phasellus vestibulum lorem sed. Ipsum dolor sit amet consectetur
          adipiscing. Pulvinar pellentesque habitant morbi tristique senectus et. Mauris in aliquam
          sem fringilla ut morbi tincidunt augue. Proin sagittis nisl rhoncus mattis. Quis varius
          quam quisque id diam vel quam elementum pulvinar. Elit scelerisque mauris pellentesque
          pulvinar pellentesque. Mattis enim ut tellus elementum sagittis. Sapien eget mi proin sed.
          Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Nec ullamcorper sit
          amet risus nullam eget. Amet consectetur adipiscing elit duis tristique sollicitudin.
          Consectetur adipiscing elit duis tristique sollicitudin. Tincidunt augue interdum velit
          euismod in pellentesque massa. Eleifend mi in nulla posuere sollicitudin aliquam ultrices.
          Arcu odio ut sem nulla pharetra diam sit amet. Sapien et ligula ullamcorper malesuada
          proin.
        </Typography>
      </WrapperPages>
    </>
  )
}
