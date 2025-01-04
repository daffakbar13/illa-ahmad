import { Box, CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import {
  useParams,
  // useSearchParams,
} from 'next/navigation'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'
import GuestsService from '@/lib/services/guests/guests.service'

const Cover: NextPage = () => {
  const { isContentLoaded, isOpenedInvitation, media, setActiveScreen } = useGlobalStore()
  const { id } = useParams()
  // const params = useSearchParams()
  // const to =  params.get('to')
  const to = decodeURIComponent(String(id))
  const detail = GuestsService.GetGuestDetail.useQuery(to as string)

  function onOpenInvitation() {
    if (document.body.requestFullscreen) {
      document.body
        .requestFullscreen()
        .catch(console.error)
        .finally(() => setActiveScreen(1))
    } else {
      setActiveScreen(1)
    }
  }

  return (
    <Section
      gap={2}
      flex={1}
      sx={{
        backgroundColor: 'primary.main',
        backgroundImage: `url(${media.images.bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{ zIndex: 2, width: '80%', height: '90%' }}
      >
        <Box
          position="relative"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={2}
          padding={2.5}
          borderRadius={999}
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bgcolor="secondary.main"
            sx={{ opacity: 0.8 }}
          />
          <Stack
            position="relative"
            alignItems="center"
            height="100%"
            gap={1.5}
            borderRadius={999}
            zIndex={2}
            pb={7}
            sx={{
              border: '6px solid',
              borderColor: 'primary.main',
            }}
          >
            <Box
              height={260}
              width="100%"
              borderRadius="1000px 1000px 0 0"
              sx={{
                backgroundImage: `url(${media.images.gallery20})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Stack gap={2} justifyContent="center" flexGrow={1}>
              <Stack>
                <Typography color="primary" className={fonts.marcellus.className} fontSize={30}>
                  Laila & Ahmad
                </Typography>
              </Stack>
              <Typography className={fonts.montserrat.className} fontSize={13}>
                Kepada Yth:
                <br />
                Bapak/Ibu/Saudara/i
              </Typography>
              <Typography className={fonts.montserrat.className} fontSize={15} fontWeight="bold">
                {to}
              </Typography>
              <Button onClick={onOpenInvitation}>
                Open Invitation &nbsp;
                {!isContentLoaded && isOpenedInvitation && (
                  <CircularProgress size={12} color="warning" />
                )}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </motion.div>
    </Section>
  )
}

export default Cover
