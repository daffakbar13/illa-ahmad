import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Surah: NextPage = () => {
  const { media } = useGlobalStore()

  return (
    <Section gap={8} paddingY={9.5} paddingX={2.5} sx={{ backgroundColor: 'primary.main' }}>
      <Stack
        border="8px solid"
        borderColor="primary.main"
        alignItems="center"
        position="relative"
        borderRadius={1000}
        paddingX={3.5}
        paddingTop={5.5}
        paddingBottom={15}
        overflow="hidden"
        boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
        sx={{ backgroundColor: '#E6DED8' }}
      >
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          bgcolor="#d5d5d5"
          sx={{
            backgroundImage: `url(${media.images.forest1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ width: '70%' }}
        >
          <Box
            border="8px solid"
            borderColor="primary.main"
            alignItems="center"
            position="relative"
            borderRadius={2}
            overflow="hidden"
            boxShadow="0px 0px 30px 0px rgba(0,0,0,0.5)"
            width="100%"
            height={260}
            gap={2}
            my={4}
            sx={{
              backgroundColor: '#E6DED8',
              backgroundImage: `url(${media.images.bb})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '140%',
              backgroundPosition: '-20px -150px',
              pointerEvents: 'none',
            }}
          ></Box>
        </motion.div>
        <Stack gap={4} width="80%">
          <motion.div
            initial={{ translateY: -100 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className}>
              Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri
              dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan
              dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu
              benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ translateX: 100 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography className={fonts.montserrat.className} fontWeight="bold">
              ~ Ar-Rum 21 ~
            </Typography>
          </motion.div>
        </Stack>
      </Stack>
    </Section>
  )
}

export default Surah
