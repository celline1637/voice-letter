import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import * as S from './Layout.styles'
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Container>
      <Navbar />
      <S.Contents> 
        <main>{children}</main>
        
        </S.Contents>
      <Footer />
      </S.Container>
    </S.Wrapper>
  );
};

export default Layout;
