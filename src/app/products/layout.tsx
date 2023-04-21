import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductsLayout;
