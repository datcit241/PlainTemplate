import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import MapLayers from "./MapLayers";

export default function App() {
  return (
    <Box
      className='w-full h-full bg-gray-300 h-[500px]'
      sx={{
        margin: 0,
        maxWidth: '100%',
        width: '100%'
    }}
    >
      <Box className='w-full h-full'>
        <MapLayers/>
        <Box
          sx={{
            width: '100%',
            height: '100px'
          }}
        ></Box>
      </Box>
    </Box>
  );
}
