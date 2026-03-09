import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  decimals = 0,
  className = '' 
}) => {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const value = useTransform(spring, (current) => current.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState(prefix + '0' + suffix);

  useEffect(() => {
    spring.set(end);
  }, [spring, end]);

  useEffect(() => {
    const unsubscribe = value.on('change', (v) => {
      setDisplayValue(`${prefix}${v}${suffix}`);
    });
    return unsubscribe;
  }, [value, prefix, suffix]);

  return (
    <span className={className}>
      {displayValue}
    </span>
  );
};

export default CountUp;
