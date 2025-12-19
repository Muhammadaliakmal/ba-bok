import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { motion } from 'framer-motion';
import { SearchOutlined } from '@ant-design/icons';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function BasuiteHero() {
  const { siteConfig } = useDocusaurusContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <header className={clsx('hero', styles.basuiteHero)}>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="row">
          <div className="col col--6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={itemVariants}>
              <Heading as="h1" className={styles.basuiteTitle}>
                {siteConfig.title}
              </Heading>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className={styles.basuiteSubtitle}>{siteConfig.tagline}</p>
            </motion.div>

            {/* Omnibar Search Mockup */}
            <motion.div variants={itemVariants} className={styles.omnibarWrapper}>
              <div className={styles.omnibar}>
                <SearchOutlined className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className={styles.omnibarInput}
                />
                <span className={styles.shortcutHint}>Ctrl + K</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
                style={{ borderRadius: '50px', padding: '12px 32px' }}>
                Start Reading
              </Link>
            </motion.div>
          </div>

          <div className="col col--6">
            {/* Abstract 3D Visual Placeholder - Floating Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className={styles.heroVisual}
            >
              <div className={styles.glassCard}>
                <div className={styles.codeSnippet}>
                  <pre>
                    <code>
                      {`import { BAButton } from 'basuite';

function App() {
  return (
    <BAButton />
  );
}`}
                    </code>
                  </pre>
                </div>
                <div className={styles.componentOutput}>
                  <span className={styles.outputLabel}>Output:</span>
                  <div className={styles.outputWrapper}>
                    <button className={styles.mockBAButton}>BASuite</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="BASUITE - Digital Knowledge Management"
      wrapperClassName="homepage-wrapper">
      <BasuiteHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
