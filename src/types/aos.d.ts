declare module 'aos' {
  import { AosOptions } from 'aos';
  
  const AOS: {
    init: (options?: AosOptions) => void;
  };
  export default AOS;
}
