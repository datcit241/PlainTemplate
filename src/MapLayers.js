import {useState} from "react";
import {Box, IconButton, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import LayersIcon from '@mui/icons-material/Layers';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const layers = [
  {
    id: 'satellite',
    label: 'Vệ tinh',
    img: '/assets/images/tddo/mapLayers/satelliteView.png'
  },
  {
    id: 'default',
    label: 'Mặc định',
    img: '/assets/images/tddo/mapLayers/defaultView.png'
  },
  {
    id: 'topo',
    label: 'Địa hình',
    img: '/assets/images/tddo/mapLayers/topoView.png'
  },
]

function MapLayers(props) {
  const [selectedLayer, setSelectedLayer] = useState(layers.find(l => l.id === 'default'))
  const [expand, setExpand] = useState(false)

  const handleLayerChanged = (layer) => {
    setSelectedLayer(layer)
  }

  return (
    <Stack
      direction='row'
      {...props}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'relative',
          width: '120px',
          height: '120px',
        }}
      >
        <Box
          className='w-full h-full cursor-pointer'
          component='img'
          src={selectedLayer.img}
          alt={selectedLayer.label}
          sx={{
            border: '4px solid #FDFDFD',
            borderRadius: '12px',
          }}
          onClick={() => setExpand(prev => !prev)}
        />
        <Box
          className='cursor-pointer'
          sx={{
            position: 'absolute',
            bottom: '9px',
            left: '23px',
          }}
          onClick={() => setExpand(prev => !prev)}
        >
          <LayersIcon
            sx={{
              color: 'white'
            }}
          />
          <Typography
            sx={{
              font: '500 14px/22px SVN-Poppins',
              color: '#FCFCFC',
            }}
          >
            Lớp bản đồ
          </Typography>
        </Box>
        <IconButton
          className='cursor-pointer'
          sx={{
            width: '32px',
            height: '32px',

            position: 'absolute',
            right: '0px',
            transform: 'translateX(50%) translateY(-50%)',
            top: '50%',

            background: 'white',
            boxShadow: '0px 12px 24px -8px rgba(0, 0, 0, 0.25)',
            borderRadius: '16px',
          }}
          onClick={() => setExpand(prev => !prev)}
        >
          {expand
            ? <KeyboardArrowLeftIcon/>
            : <KeyboardArrowRightIcon/>
          }
        </IconButton>
      </Box>

      {expand && <Stack
        direction='row'
        sx={{
          padding: '16px',
          marginLeft: '36px',
          gap: '28px',
          height: '120px',
          background: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'flex-start',

          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          borderRadius: '12px',
        }}
        onMouseLeave={() => setExpand(false)}
      >
        {layers.map(layer =>
          <Stack
            className='cursor-pointer'
            onClick={() => handleLayerChanged(layer)}
          >
            <Box
              key={layer.id}
              component='img'
              src={layer.img}
              alt={layer.label}
              sx={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                border: layer === selectedLayer ? '2px solid #EB6017' : 'none',
              }}
            />
            <Typography
              sx={{
                font: '500 14px/22px SVN-Poppins',
                mt: '12px',
                textAlign: 'center',
                color: layer === selectedLayer ? '#EB6017' : '#8C96A0',
              }}
            >
              {layer.label}
            </Typography>
          </Stack>
        )}
      </Stack>
      }
    </Stack>
  )
}

export default MapLayers