module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@MaedahBatool`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		// @TODO: STEP #1: Configure WordPress Backend as a source.
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				// Your WordPress source.
				baseUrl: `demo.wp-api.org`,
				protocol: `https`,
				// Only fetches posts, tags and categories from the baseUrl.
				includedRoutes: ['**/posts', '**/tags', '**/categories'],
				// Not using ACF so putting it off.
				useACF: false
			}
		},
		`gatsby-plugin-glamor`,
		`gatsby-plugin-offline`
	]
};
