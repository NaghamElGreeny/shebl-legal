import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
      },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);