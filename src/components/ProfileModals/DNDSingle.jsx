import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { DNDButton, DNDInnerContainer } from '../../styles/Modals/sharedModals.styles';
import { Button, Flex } from 'antd';

function DNDSingle(  {onFileSelect} ) {
    const [file, setFile] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0]);
        onFileSelect(acceptedFiles[0]);
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'application/pdf',
        maxFiles: 1,
        onDrop,
    });

    const handleRemoveFile = () => {
        setFile(null);
        onFileSelect(null);
    };



    
  return (
    <DNDInnerContainer {...getRootProps()} isDragActive={isDragActive}>
    <input {...getInputProps({ multiple: false })} id="file-upload" type="file" style={{display: 'none'}} />
    {isDragActive ? (
        <p>Drop the file here ...</p>
    ) : file ? (
        <div>
            <span style={{fontWeight: '700'}}>{file?.name}</span>
            <DNDButton
                type='primary'
                onClick={() => handleRemoveFile()}
                
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{width: '1rem', height: '1rem'}}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </DNDButton>
        </div>
    ) : (
        <Flex vertical align='center'>
            <p>Drag and drop your resume files here</p>
            <p>or</p>
           <Button type='primary' >
            Browse Files
           </Button>
        </Flex>
    )}
  </DNDInnerContainer>
  )
}

export default DNDSingle