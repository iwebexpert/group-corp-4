import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Typography, Paper, Divider, Avatar, Chip } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import Loading from '../components/Loading/Loading'
import forest from '../assets/forest.jpg'
import { getPageByUrl } from '../store/actions/pageActions'
import { getCommentsForPage } from '../store/actions/commentActions'

import { Opacity } from '@mui/icons-material'

export default function Page(props) {
  console.log('props: ', props)
  const url = props?.url || null
  const currentPage = useSelector((state) => state.page.currentPage)
  const comments = useSelector((state) => state.comment.commentsOnPage)
  console.log('comments: ', comments)
  const loading = useSelector((state) => state.page.loading)
  const params = useParams()
  const dispatch = useDispatch()
  const mainPages = ['home', 'about', 'contacts']
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    url ? dispatch(getPageByUrl(url)) : dispatch(getPageByUrl(params?.id))
  }, [params.id])

  useEffect(() => {
    if (currentPage?.id && !mainPages.includes(currentPage?.url))
      dispatch(getCommentsForPage(currentPage?.id))
  }, [currentPage])

  return (
    <Box
      sx={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card sx={{ width: '75%' }}>
            <CardMedia component="img" height="230" image={forest} alt="forest" />
            <CardContent>
              <Typography variant="h4">{currentPage?.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {currentPage?.content}
              </Typography>
            </CardContent>
            {!url && !mainPages.includes(currentPage?.url) && (
              <>
                <CardActions
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
                  // disableSpacing
                >
                  <Chip
                    onClick={handleExpandClick}
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                    title="comments"
                    icon={<ChatBubbleOutlineIcon />}
                  />
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent sx={{ height: '300px', overflow: 'auto' }}>
                    <Typography paragraph>Comments</Typography>
                    {comments?.length > 0 ? (
                      comments?.map((comment) => (
                        <Box key={comment?.id}>
                          <Avatar aria-label="recipe"></Avatar>
                          <Typography>{comment?.content}</Typography>
                          <Typography style={{ alignSelf: 'flex-end' }}>
                            {comment?.user?.name}
                          </Typography>
                          <Divider sx={{ mb: 1 }} />
                        </Box>
                      ))
                    ) : (
                      <Box sx={{ padding: '1rem' }} elevation={24}>
                        <Typography>Not comments</Typography>
                      </Box>
                    )}
                  </CardContent>
                  {/* {user && (
                  // <Paper sx={{ padding: '1rem' }} elevation={2}>
                    <CommentsForm pageId={currentPage?.id} userId={user?.id} />
                  // </Paper>
                )} */}
                </Collapse>
              </>
            )}
          </Card>
        </>
      )}
    </Box>
  )
}
