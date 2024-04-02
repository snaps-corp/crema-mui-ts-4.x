import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDropzone } from 'react-dropzone';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { styled } from '@mui/material/styles';
import { darken } from '@mui/material';
import { generateUniqueID } from '@crema/helpers/StringHelper';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi } from '@crema/hooks/APIHooks';
import { PostObjType, WallDataType } from '@crema/types/models/apps/Wall';
import { MessageType } from '@crema/types/models/apps/Chat';

const AddCommentWrapper = styled('div')(({ theme }) => ({
  borderTop: `solid 1px ${theme.palette.divider}`,
  display: 'flex',
  paddingTop: 16,
  '&:not(:last-of-type)': {
    marginBottom: 20,
  },
}));
const AddCommentContent = styled(Box)(({ theme }) => ({
  backgroundColor: darken(theme.palette.background.paper, 0.03),
  borderRadius: 30,
  padding: '7px 20px',
  display: 'flex',
  alignItems: 'center',
  flex: 1,
}));

const CommentTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused, &:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
  },
  '& .MuiInputBase-input': {
    padding: '6px 5px 7px',
  },
}));

type Props = {
  postId: number;
  wallData: WallDataType;
  setPostList: (data: PostObjType[]) => void;
};

const AddComment = ({ postId, wallData, setPostList }: Props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const [comment, setComment] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      console.log('acceptedFiles', acceptedFiles);
      const newComment = {
        author: {
          name: wallData.name,
          profilePic: wallData.profilePic,
          id: wallData.id,
        },
        message: '',
        message_type: MessageType.MEDIA,
        media: {
          id: generateUniqueID(),
          url: URL.createObjectURL(acceptedFiles[0]),
          mime_type: acceptedFiles[0].type,
        },
      };
      postDataApi<PostObjType[]>(
        '/wall/posts/comments',
        infoViewActionsContext,
        {
          postId,
          comment: newComment,
        },
      )
        .then((data) => {
          setPostList(data);
          infoViewActionsContext.showMessage('Comment Added Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    },
  });

  const submitComment = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('');
    if (event.key === 'Enter') {
      sendComment();
    }
  };

  const sendComment = () => {
    const newComment = {
      author: {
        name: wallData.name,
        profilePic: wallData.profilePic,
        id: wallData.id,
      },
      message_type: MessageType.TEXT,
      comment,
    };
    postDataApi<PostObjType[]>('/wall/posts/comments', infoViewActionsContext, {
      postId,
      comment: newComment,
    })
      .then((data) => {
        setPostList(data);
        infoViewActionsContext.showMessage('Comment Added Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setComment('');
  };

  return (
    <AddCommentWrapper>
      <Avatar
        sx={{
          width: 44,
          height: 44,
          marginRight: 4,
        }}
        src={wallData.profilePic}
      />
      <AddCommentContent
        sx={{
          mb: { xs: 3, md: 0 },
        }}
      >
        <CommentTextField
          placeholder='Write a comment'
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={submitComment}
        />

        <Box display='flex' alignItems='center'>
          {comment === '' ? (
            <>
              <IconButton
                sx={{
                  padding: 2,
                  fontSize: 20,
                  '& .MuiSvgIcon-root': {
                    fontSize: 20,
                  },
                }}
              >
                <EmojiEmotionsOutlinedIcon />
              </IconButton>
              <span
                {...getRootProps({
                  className: 'dropzone',
                })}
              >
                <input {...getInputProps()} />
                <IconButton
                  sx={{
                    padding: 2,
                    fontSize: 20,
                    '& .MuiSvgIcon-root': {
                      fontSize: 20,
                    },
                  }}
                >
                  <AttachFileIcon />
                </IconButton>
              </span>
            </>
          ) : (
            <IconButton
              sx={{
                padding: 2,
                fontSize: 20,
                '& .MuiSvgIcon-root': {
                  fontSize: 20,
                },
              }}
              onClick={sendComment}
            >
              <SendOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </AddCommentContent>
    </AddCommentWrapper>
  );
};

export default AddComment;
