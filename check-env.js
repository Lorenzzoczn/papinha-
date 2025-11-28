#!/usr/bin/env node

/**
 * Script de verificação de ambiente
 * Verifica se todas as configurações necessárias estão corretas
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.blue}${msg}${colors.reset}`),
};

let hasErrors = false;

// Verificar Node.js
log.title('🔍 Verificando Ambiente...');

const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion >= 18) {
  log.success(`Node.js ${nodeVersion} (OK)`);
} else {
  log.error(`Node.js ${nodeVersion} (Requer v18 ou superior)`);
  hasErrors = true;
}

// Verificar package.json
const packagePath = join(__dirname, 'package.json');
if (existsSync(packagePath)) {
  log.success('package.json encontrado');
  
  try {
    const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    const requiredDeps = [
      '@supabase/supabase-js',
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'vite',
    ];
    
    const missingDeps = requiredDeps.filter(dep => !deps[dep]);
    
    if (missingDeps.length === 0) {
      log.success('Todas as dependências necessárias estão listadas');
    } else {
      log.error(`Dependências faltando: ${missingDeps.join(', ')}`);
      hasErrors = true;
    }
  } catch (err) {
    log.error('Erro ao ler package.json');
    hasErrors = true;
  }
} else {
  log.error('package.json não encontrado');
  hasErrors = true;
}

// Verificar node_modules
const nodeModulesPath = join(__dirname, 'node_modules');
if (existsSync(nodeModulesPath)) {
  log.success('node_modules encontrado');
} else {
  log.warning('node_modules não encontrado - Execute: npm install');
  hasErrors = true;
}

// Verificar .env.local
log.title('\n🔐 Verificando Configuração Supabase...');

const envPath = join(__dirname, '.env.local');
if (existsSync(envPath)) {
  log.success('.env.local encontrado');
  
  try {
    const envContent = readFileSync(envPath, 'utf-8');
    
    const hasUrl = envContent.includes('VITE_SUPABASE_URL=');
    const hasKey = envContent.includes('VITE_SUPABASE_ANON_KEY=');
    
    if (hasUrl && hasKey) {
      log.success('Variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY encontradas');
      
      // Verificar se não são valores de exemplo
      const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
      const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.+)/);
      
      if (urlMatch && urlMatch[1].includes('seu-projeto')) {
        log.warning('VITE_SUPABASE_URL ainda está com valor de exemplo');
        log.info('Substitua por sua URL real do Supabase');
        hasErrors = true;
      }
      
      if (keyMatch && keyMatch[1].includes('sua-chave')) {
        log.warning('VITE_SUPABASE_ANON_KEY ainda está com valor de exemplo');
        log.info('Substitua por sua chave real do Supabase');
        hasErrors = true;
      }
    } else {
      if (!hasUrl) log.error('VITE_SUPABASE_URL não encontrada no .env.local');
      if (!hasKey) log.error('VITE_SUPABASE_ANON_KEY não encontrada no .env.local');
      hasErrors = true;
    }
  } catch (err) {
    log.error('Erro ao ler .env.local');
    hasErrors = true;
  }
} else {
  log.error('.env.local não encontrado');
  log.info('Crie o arquivo .env.local com suas credenciais do Supabase');
  log.info('Consulte: COMO_CONFIGURAR_ENV.md');
  hasErrors = true;
}

// Verificar arquivos importantes
log.title('\n📁 Verificando Arquivos do Projeto...');

const importantFiles = [
  'index.html',
  'vite.config.ts',
  'tsconfig.json',
  'src/main.tsx',
  'src/App.tsx',
  'setup.sql',
];

importantFiles.forEach(file => {
  const filePath = join(__dirname, file);
  if (existsSync(filePath)) {
    log.success(`${file} encontrado`);
  } else {
    log.error(`${file} não encontrado`);
    hasErrors = true;
  }
});

// Resultado final
log.title('\n📊 Resultado da Verificação');

if (hasErrors) {
  log.error('Alguns problemas foram encontrados');
  log.info('\nConsulte a documentação:');
  log.info('  - START.md - Guia de início rápido');
  log.info('  - GUIA_RAPIDO.md - Guia detalhado');
  log.info('  - COMO_CONFIGURAR_ENV.md - Configuração do ambiente');
  process.exit(1);
} else {
  log.success('Tudo pronto! ✨');
  log.info('\nPróximos passos:');
  log.info('  1. Execute: npm run dev');
  log.info('  2. Acesse: http://localhost:5173');
  log.info('  3. Crie uma conta e comece a usar!');
  process.exit(0);
}
