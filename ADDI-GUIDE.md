# Cherry Bay Website Guide for Addi

Hey Addi! Here's everything you need to know to manage and update your Cherry Bay website.

---

## Getting Started

### Viewing Your Site
- **Local Development**: http://localhost:5173
- **Live Site**: Your Netlify URL (check Netlify dashboard)

### Admin Dashboard
Go to: **http://localhost:5173/admin**

From the admin dashboard you can:
- View sales and order statistics
- Manage products
- View and update orders
- See customer information
- Create discount codes
- View analytics

---

## Quick Tasks

### Adding a New Product

Ask Claude:
> "Add a new bikini top called [NAME] with price $[PRICE], available in sizes [XS, S, M, L], colors [list colors], and use this image: [paste image URL]"

Example:
> "Add a new bikini top called 'Sunset Glow Triangle Top' with price $68, available in sizes XS, S, M, L, XL, colors Cherry, Coral, and Black"

### Changing Product Images

Ask Claude:
> "Update the image for [PRODUCT NAME] to use this photo: [paste new image URL]"

Example:
> "Update the image for 'Cherry Red Bandeau Top' to use this photo: https://example.com/my-photo.jpg"

### Updating Prices

Ask Claude:
> "Change the price of [PRODUCT NAME] to $[NEW PRICE]"

Example:
> "Change the price of 'Ocean Breeze One Piece' to $135"

### Adding a Sale

Ask Claude:
> "Put [PRODUCT NAME] on sale with original price $[OLD PRICE] and sale price $[NEW PRICE]"

Example:
> "Put 'Tropical Paradise Cover-Up' on sale with original price $110 and sale price $85"

### Removing a Product

Ask Claude:
> "Remove the product called [PRODUCT NAME] from the store"

---

## Updating Website Content

### Changing the Homepage Hero Text

Ask Claude:
> "Update the homepage hero text to say '[YOUR NEW TEXT]'"

Example:
> "Update the homepage hero text to say 'Summer Swimwear That Actually Fits'"

### Updating Your Founder Story

Ask Claude:
> "Update my founder story on the About page to say: [paste your new story]"

### Changing the Announcement Bar

Ask Claude:
> "Change the announcement bar to say '[YOUR MESSAGE]'"

Example:
> "Change the announcement bar to say 'Free shipping on orders over $75! Use code SUMMER25'"

### Adding a New Collection

Ask Claude:
> "Create a new collection called '[NAME]' with products [list product names]"

---

## Managing Discount Codes

### Creating a Discount Code

Ask Claude:
> "Create a discount code '[CODE]' for [X]% off with minimum purchase of $[AMOUNT]"

Example:
> "Create a discount code 'CHERRYBAY15' for 15% off with minimum purchase of $50"

### Creating a Free Shipping Code

Ask Claude:
> "Create a free shipping code '[CODE]' for orders over $[AMOUNT]"

---

## Updating Images

### Best Image Sizes
- **Product Images**: 600x800 pixels (portrait orientation)
- **Hero Images**: 800x1000 pixels
- **Category Images**: 600x800 pixels
- **Instagram Grid**: 400x400 pixels (square)

### Where to Host Images
1. **Unsplash** (free stock photos): https://unsplash.com
2. **Your own photos**: Upload to Cloudinary, Imgur, or ask Claude to help

### Adding Your Own Photos

Ask Claude:
> "I want to replace the placeholder photos with my own. Where should I upload them?"

---

## Common Changes

### Updating Contact Information

Ask Claude:
> "Update the contact email to [YOUR EMAIL] and phone to [YOUR NUMBER]"

### Changing Social Media Links

Ask Claude:
> "Update the Instagram link to [YOUR INSTAGRAM URL]"

### Adding a New Page

Ask Claude:
> "Create a new page called '[PAGE NAME]' with information about [TOPIC]"

Example:
> "Create a new page called 'Sustainability' with information about our eco-friendly materials"

---

## Style & Design

### Changing Colors

Ask Claude:
> "Change the primary cherry red color to [describe new color or hex code]"

### Updating Fonts

Ask Claude:
> "Change the heading font to [FONT NAME]"

### Adding New Sections

Ask Claude:
> "Add a [TYPE] section to the homepage showing [CONTENT]"

Example:
> "Add a testimonials section to the homepage showing customer reviews"

---

## Troubleshooting

### Site Not Loading?
Ask Claude:
> "The site isn't loading, can you check what's wrong?"

### Something Looks Broken?
Take a screenshot and ask Claude:
> "This doesn't look right, can you fix it?" [attach screenshot]

### Want to Undo a Change?
Ask Claude:
> "Can you undo the last change we made?"

---

## Tips for Working with Claude

1. **Be specific** - The more details you give, the better the result
2. **One thing at a time** - Ask for one change, review it, then move to the next
3. **Share screenshots** - If something looks wrong, show Claude what you see
4. **Ask questions** - If you're not sure how to do something, just ask!

---

## File Locations (for reference)

| What | Where |
|------|-------|
| Product data | `src/data/products.ts` |
| Homepage | `src/pages/Home.tsx` |
| About page | `src/pages/About.tsx` |
| Shop page | `src/pages/Shop.tsx` |
| Colors & styles | `tailwind.config.js` |
| Logo | `src/components/ui/Logo.tsx` |

---

## Need Help?

Just describe what you want to change in plain English and Claude will help you make it happen!

Good luck with Cherry Bay! You've got this! 🍒🌊
