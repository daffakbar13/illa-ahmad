import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import fonts from '@/assets/fonts'
import Section from '@/lib/components/Section'
import useGlobalStore from '@/lib/hooks/useGlobalStore'

const Card = ({ children }: React.PropsWithChildren) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    {children}
  </motion.div>
)

const Gallery: NextPage = () => {
  const { previewGallery, media, openPreviewGallery, closePreviewGallery } = useGlobalStore()

  const renderImages = (isLandscape: boolean, ...images: (keyof typeof media.images)[]) =>
    images.map((key, i) => (
      <Card key={i}>
        <Image
          src={media.images[key]}
          height={100}
          width={100}
          alt={key}
          quality={1}
          style={{ ...(isLandscape && { aspectRatio: 'unset' }) }}
          onClick={openPreviewGallery(media.images[key])}
        />
      </Card>
    ))

  return (
    <Section
      justifyContent="start"
      gap={4}
      paddingX={2}
      paddingY={9}
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <motion.div
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography className={fonts.astonScript.className} fontSize={30} color="white">
          Gallery
        </Typography>
      </motion.div>
      <Stack
        gap={0.5}
        flex={1}
        width="100%"
        sx={{
          '> *': { gap: 1 },
          '> * > *': { flex: 1, cursor: 'pointer' },
          img: {
            width: '100%',
            height: 'auto',
            borderRadius: 0.5,
            objectFit: 'cover',
            aspectRatio: '191/286',
          },
        }}
      >
        <Box display="flex">{renderImages(false, 'gallery7', 'gallery5')}</Box>
        <Box display="flex">{renderImages(true, 'gallery2')}</Box>
        <Box display="flex">{renderImages(false, 'gallery15', 'gallery6')}</Box>
        <Box display="flex">{renderImages(true, 'gallery4')}</Box>
        <Box display="flex">{renderImages(false, 'gallery9', 'gallery10')}</Box>
        <Box display="flex">{renderImages(false, 'gallery11', 'gallery12')}</Box>
        <Box display="flex">{renderImages(false, 'gallery13', 'gallery8')}</Box>
        <Box display="flex">{renderImages(false, 'gallery16', 'gallery17')}</Box>
        <Box display="flex">{renderImages(false, 'gallery18', 'gallery19')}</Box>
        <Box display="flex">{renderImages(false, 'gallery21', 'gallery23')}</Box>
        <Box display="flex">{renderImages(false, 'gallery24', 'gallery25')}</Box>
      </Stack>
      <Dialog open={previewGallery !== null} fullWidth onClose={closePreviewGallery}>
        {previewGallery && (
          <Image
            src={previewGallery}
            height={100}
            width={100}
            alt={'gallery'}
            quality={10}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </Dialog>
    </Section>
  )
}

export default Gallery
