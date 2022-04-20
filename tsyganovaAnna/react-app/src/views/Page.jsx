import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Typography,
  Divider,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
} from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import Loading from '../components/Loading/Loading'
import CommentForm from '../components/Comments/CommentForm'
import CommentBlock from '../components/Comments/CommentBlock'

import forest from '../assets/forest.jpg'
import { getPageByUrl } from '../store/actions/pageActions'
import { getCommentsForPage, addComment } from '../store/actions/commentActions'

export default function Page(props) {
  const url = props?.url || null
  const currentPage = useSelector((state) => state.page.currentPage)
  const comments = useSelector((state) => state.comment.commentsOnPage)
  const loading = useSelector((state) => state.page.loading)
  const params = useParams()
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const mainPages = ['home', 'about', 'contacts']

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const onAddComment = (data) => {
    dispatch(addComment(data))
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
          <Card sx={{ width: '80%' }}>
            <CardMedia component="img" height="230" image={forest} alt="forest" />
            <CardContent>
              <Typography variant="h3">{currentPage?.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {currentPage?.content}
              </Typography>
            </CardContent>
            {!url && !mainPages.includes(currentPage?.url) && (
              <>
                <CardActions
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <Chip
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="comments"
                    title="comments"
                    icon={<ChatBubbleOutlineIcon />}
                    sx={{ p: 1.3 }}
                    label={comments?.length}
                  />
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent sx={{ maxHeight: '300px', overflow: 'auto' }}>
                    <Typography variant="h5">Comments</Typography>
                    <CommentForm onChangeData={onAddComment} pageId={currentPage?.id} />
                    {comments?.length > 0 ? (
                      <>
                        <Divider sx={{ mb: 1 }} />
                        {comments?.map((comment, index) => (
                          <CommentBlock key={index} comment={comment} />
                        ))}
                      </>
                    ) : (
                      <Box sx={{ padding: '1rem' }}>
                        <Typography>Not comments</Typography>
                      </Box>
                    )}
                  </CardContent>
                </Collapse>
              </>
            )}
          </Card>
        </>
      )}
    </Box>
  )
}
