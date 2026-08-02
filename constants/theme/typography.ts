/**
 * Design System Typography
 * Font Family: Poppins
 */

export const typography = {
  fontFamily: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },

  fontSize: {
    h1: 32, // Page / Screen Title
    h2: 24, // Section Title
    h3: 20, // Card / Module Title
    h4: 16, // Subheading
    bodyLarge: 16, // Important content
    bodyMedium: 14, // Body text
    bodySmall: 13, // Supporting text
    caption: 11, // Labels, meta text
  },

  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    semiBold: "600" as const,
    bold: "700" as const,
  },

  lineHeight: {
    h1: 1.2,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    bodyLarge: 1.6,
    bodyMedium: 1.6,
    bodySmall: 1.6,
    caption: 1.4,
  },
} as const;

export type TypographyTokens = typeof typography;
