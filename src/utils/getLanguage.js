export function getLanguageByExtension(extension) {
    const languageMap = {
      // Programming Languages
      js: 'javascript',
      jsx: 'javascript',
      ts: 'typescript',
      tsx: 'typescript',
      py: 'python',
      rb: 'ruby',
      java: 'java',
      cpp: 'c++',
      c: 'c',
      swift: 'swift',
      go: 'go',
      php: 'php',
      rust: 'rust',
      perl: 'perl',
      scala: 'scala',
      kotlin: 'kotlin',
      groovy: 'groovy',
      dart: 'dart',
  
      // Markup and Web Technologies
      html: 'html',
      htm: 'html',
      css: 'css',
      xml: 'xml',
      json: 'json',
      markdown: 'markdown',
      md: 'markdown',
  
      
      // Scripting Languages
      sh: 'bash',
      perl: 'perl',
      lua: 'lua',
      r: 'r',
  
      
    };
    const language = languageMap[extension.toLowerCase()];
    if(language) return language.toLowerCase();
    return  null;
  }
  