import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getOnePageFetch } from 'actions/actionsPages'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from '@emotion/styled'
import nature from 'assets/img/nature.jpg'
import { Box } from '@mui/system'
import { Paper, IconButton } from '@mui/material'
import { getCommentsFetch } from 'actions/actionComments'
import CommentsForm from 'components/createCommentsFormBasedRHF/CommentsForm'
import { AppState } from 'reducers/index'

const CustomPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

type PageShowProps = {
  url?: string | null
  user: UserType | null
}

export default function PageShow(props: PageShowProps) {
  const url = props?.url
  const user = props?.user
  const params = useParams()
  const dispatch = useDispatch()
  const currentPage = useSelector((state: AppState) => state.pages.currentPage)
  const comments = useSelector((state: AppState) => state.comments.currentsComments)
  const messageRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (url) {
      dispatch(getOnePageFetch(url))
    } else {
      dispatch(getOnePageFetch(params.id))
    }
  }, [params.id])

  useEffect(() => {
    if (currentPage?.id && currentPage?.url !== 'home') dispatch(getCommentsFetch(currentPage?.id))
  }, [currentPage])

  useEffect(() => {
    //@ts-ignore
    messageRef?.current?.scroll(0, messageRef.current.scrollHeight)
  }, [comments])

  return (
    <>
      <Helmet>
        <title>{currentPage?.title}</title>
      </Helmet>
      <Box sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', minHeight: '416px' }}>
        <Card sx={{ width: '70%' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>}
            title={currentPage?.user?.name}
          />
          <CardMedia component="img" height="194" image={nature} alt="nature" />
          <CardContent>
            <Typography variant="h4">{currentPage?.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {currentPage?.content}
            </Typography>
          </CardContent>
          {url || params.id == 'home' ? null : (
            <>
              <CardActions
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
                disableSpacing
              >
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  title="comments"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent ref={messageRef} sx={{ height: '300px', overflow: 'auto' }}>
                  <Typography paragraph>Comments</Typography>
                  {comments?.length > 0 ? (
                    comments?.map((comment, index) => (
                      <CustomPaper key={comment?.id} elevation={24}>
                        <p>{comment?.content}</p>
                        <p style={{ alignSelf: 'flex-end' }}>{comment?.user?.name}</p>
                      </CustomPaper>
                    ))
                  ) : (
                    <Paper sx={{ padding: '1rem' }} elevation={24}>
                      Not comments
                    </Paper>
                  )}
                </CardContent>
                {user && (
                  <Paper sx={{ padding: '1rem' }} elevation={2}>
                    <CommentsForm pageId={currentPage?.id} userId={user?.id} />
                  </Paper>
                )}
              </Collapse>
            </>
          )}
        </Card>
      </Box>
    </>
  )
}
