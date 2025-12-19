import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { ReadOutlined, ThunderboltOutlined, CoffeeOutlined, SafetyCertificateOutlined, CodeOutlined, CloudServerOutlined } from '@ant-design/icons';

const FeatureList = [
  {
    title: 'Clean & Modern',
    icon: <ThunderboltOutlined />,
    description: 'Glassmorphism aesthetic with deeply refined transparency effects.',
    className: styles.cardLarge, // Bento span 2
  },
  {
    title: 'Easy Navigation',
    icon: <ReadOutlined />,
    description: 'Intuitive structure that helps you find what you need quickly.',
    className: styles.cardNormal,
  },
  {
    title: 'Code Ready',
    icon: <CodeOutlined />,
    description: 'Copy-paste ready components for your next project.',
    className: styles.cardNormal,
  },
  {
    title: 'Secure & Safe',
    icon: <SafetyCertificateOutlined />,
    description: 'Built with TypeScript and best security practices in mind.',
    className: styles.cardNormal,
  },
  {
    title: 'Blazing Fast',
    icon: <CoffeeOutlined />,
    description: 'Optimized for performance with zero runtime overhead options.',
    className: styles.cardLarge, // Bento span 2
  },
  {
    title: 'Cloud Native',
    icon: <CloudServerOutlined />,
    description: 'Ready for deployment on Vercel, Netlify, or Docker.',
    className: styles.cardNormal,
  },
];

function Feature({ title, description, icon, className }) {
  return (
    <motion.div
      className={clsx(styles.bentoCard, className)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>{icon}</div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </motion.div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.bentoGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
