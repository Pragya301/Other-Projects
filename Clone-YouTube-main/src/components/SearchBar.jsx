import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Stack } from '@mui/material'
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm || transcript) {
      navigate(`/search/${searchTerm || transcript}`);

      setSearchTerm('');
    }
  };

  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  


  return (
    <Stack 
      direction="row" 
      alignItems="center" 
    >
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid lightgrey',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm || transcript}
        onChange={(e) => setSearchTerm(e.target.value || transcript)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'lightgrey' }} onClick={resetTranscript}><ClearIcon /></IconButton>
      <IconButton type='submit' sx={{ p: '10px', color: 'lightgrey' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
    <div>
      {listening
        ? <IconButton type='submit'  sx={{ p: '10px', color: 'red' }} onClick={SpeechRecognition.stopListening}><MicIcon /></IconButton>
        : <IconButton type='submit'  sx={{ p: '10px', color: 'grey' }} onClick={SpeechRecognition.startListening}><MicIcon/></IconButton>
      }
    </div>
    </Stack>
  );
};

export default SearchBar;