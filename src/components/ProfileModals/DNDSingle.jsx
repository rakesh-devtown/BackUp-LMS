import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

function DNDSingle(  {onFileSelect} ) {
    const [file, setFile] = useState(null);
    // console.log(file);
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
    <div {...getRootProps()} style={{border: '2px dashed', padding: '6rem', backgroundColor: isDragActive ? '#E5E7EB' : '#FFFFFF'}}>
    <input {...getInputProps({ multiple: false })} id="file-upload" type="file" style={{display: 'none'}} />
    {isDragActive ? (
        <p>Drop the file here ...</p>
    ) : file ? (
        <div>
            <span style={{fontWeight: '700'}}>{file?.name}</span>
            <button
                onClick={() => handleRemoveFile()}
                style={{display: 'inline-block', marginLeft: '0.5rem', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '0.25rem 0.75rem', backgroundColor: '#E5E7EB', fontSize: '0.875rem', fontWeight: '500', color: '#4B5563', cursor: 'pointer'}}
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
            </button>
        </div>
    ) : (
        <>
            <p>Drag and drop your resume files here</p>
            <p>or</p>
            <p
                // htmlFor="file-upload"
                style={{display: 'inline-block', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '0.5rem 1rem', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', fontSize: '0.875rem', fontWeight: '500', color: '#4B5563', cursor: 'pointer'}}
            >
                Browse files
            </p>
        </>
    )}
  </div>
  )
}

export default DNDSingle