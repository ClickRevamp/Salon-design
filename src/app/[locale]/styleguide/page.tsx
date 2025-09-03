'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertCircle, Palette, Type, MousePointer } from 'lucide-react';

// Animation variants for demonstration
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: "easeOut" }
};

const hoverScale = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

export default function StyleguidePage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" className="bg-gradient-to-br from-blush/20 via-transparent to-mauve/20">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Design System
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              Visual QA reference for Lash Bloom Studio&apos;s design system. 
              All components, colors, typography, and patterns in one place.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Colors */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-3xl font-bold text-brand-text">Colors</h2>
              </div>
              <p className="text-brand-text/70">Brand color palette with Tailwind CSS tokens.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand Colors */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">Brand Colors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-brand-bg border border-brand-text/20"></div>
                    <div>
                      <div className="font-medium text-brand-text">Porcelain</div>
                      <div className="text-sm text-brand-text/60">bg-brand-bg</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-brand-text"></div>
                    <div>
                      <div className="font-medium text-brand-text">Ink</div>
                      <div className="text-sm text-brand-text/60">bg-brand-text</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-brand-accent"></div>
                    <div>
                      <div className="font-medium text-brand-text">Gold</div>
                      <div className="text-sm text-brand-text/60">bg-brand-accent</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Design System Colors */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">System Colors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-porcelain border border-brand-text/20"></div>
                    <div>
                      <div className="font-medium text-brand-text">Porcelain</div>
                      <div className="text-sm text-brand-text/60">bg-porcelain</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blush"></div>
                    <div>
                      <div className="font-medium text-brand-text">Blush</div>
                      <div className="text-sm text-brand-text/60">bg-blush</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-mauve"></div>
                    <div>
                      <div className="font-medium text-brand-text">Mauve</div>
                      <div className="text-sm text-brand-text/60">bg-mauve</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gold"></div>
                    <div>
                      <div className="font-medium text-brand-text">Gold</div>
                      <div className="text-sm text-brand-text/60">bg-gold</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-ink"></div>
                    <div>
                      <div className="font-medium text-brand-text">Ink</div>
                      <div className="text-sm text-brand-text/60">bg-ink</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Accessibility Notes */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand-text text-sm">WCAG AA Compliant</div>
                      <div className="text-xs text-brand-text/60">4.5:1 contrast ratio for normal text</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand-text text-sm">Large Text</div>
                      <div className="text-xs text-brand-text/60">3:1 contrast ratio for 18pt+ text</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand-text text-sm">Color Independence</div>
                      <div className="text-xs text-brand-text/60">Never rely on color alone for meaning</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Typography */}
      <Section spacing="xl" className="bg-porcelain">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-3xl font-bold text-brand-text">Typography</h2>
              </div>
              <p className="text-brand-text/70">Fraunces serif for headlines, Manrope sans for UI and body text.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Headings */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-6">Headings</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text">Heading 1</h1>
                    <code className="text-xs text-brand-text/60">text-4xl md:text-5xl font-serif font-bold</code>
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text">Heading 2</h2>
                    <code className="text-xs text-brand-text/60">text-3xl md:text-4xl font-serif font-bold</code>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-brand-text">Heading 3</h3>
                    <code className="text-xs text-brand-text/60">text-2xl md:text-3xl font-serif font-semibold</code>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-brand-text">Heading 4</h4>
                    <code className="text-xs text-brand-text/60">text-xl md:text-2xl font-serif font-semibold</code>
                  </div>
                  <div>
                    <h5 className="font-serif text-lg md:text-xl font-medium text-brand-text">Heading 5</h5>
                    <code className="text-xs text-brand-text/60">text-lg md:text-xl font-serif font-medium</code>
                  </div>
                  <div>
                    <h6 className="font-serif text-base md:text-lg font-medium text-brand-text">Heading 6</h6>
                    <code className="text-xs text-brand-text/60">text-base md:text-lg font-serif font-medium</code>
                  </div>
                </div>
              </motion.div>

              {/* Body Text */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-6">Body Text</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl text-brand-text/70 leading-relaxed">
                      Large body text for introductions and important content.
                    </p>
                    <code className="text-xs text-brand-text/60">text-xl font-sans leading-relaxed</code>
                  </div>
                  <div>
                    <p className="text-base text-brand-text leading-relaxed">
                      Regular body text for most content. This is the default reading text that provides 
                      optimal readability while maintaining the elegant aesthetic of the design system.
                    </p>
                    <code className="text-xs text-brand-text/60">text-base font-sans leading-relaxed</code>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text/70">
                      Small text for captions, metadata, and secondary information.
                    </p>
                    <code className="text-xs text-brand-text/60">text-sm font-sans</code>
                  </div>
                  <div>
                    <p className="text-xs text-brand-text/60">
                      Extra small text for disclaimers and fine print.
                    </p>
                    <code className="text-xs text-brand-text/60">text-xs font-sans</code>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MousePointer className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-3xl font-bold text-brand-text">Buttons</h2>
              </div>
              <p className="text-brand-text/70">Interactive button variants with consistent styling and hover states.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Primary Buttons */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-4">Primary</h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="w-full rounded-full bg-gold hover:bg-gold/90">
                      Large Primary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full rounded-full bg-gold hover:bg-gold/90">
                      Default Primary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="sm" className="w-full rounded-full bg-gold hover:bg-gold/90">
                      Small Primary
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary Buttons */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-4">Secondary</h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="w-full rounded-full border-2 border-gold text-gold hover:bg-gold/10">
                      Large Secondary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full rounded-full border-2 border-gold text-gold hover:bg-gold/10">
                      Default Secondary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="sm" variant="outline" className="w-full rounded-full border-2 border-gold text-gold hover:bg-gold/10">
                      Small Secondary
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Ghost & Disabled */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-4">Other Variants</h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="ghost" className="w-full rounded-full text-brand-text hover:bg-gold/10">
                      Ghost Button
                    </Button>
                  </motion.div>
                  <Button variant="secondary" className="w-full rounded-full">
                    Secondary Variant
                  </Button>
                  <Button disabled className="w-full rounded-full bg-gold/50">
                    Disabled State
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Forms */}
      <Section spacing="xl" className="bg-porcelain">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">Form Elements</h2>
              <p className="text-brand-text/70">Input fields, selects, and form controls with consistent styling.</p>
            </motion.div>

            <div className="max-w-2xl">
              <motion.div variants={fadeInUp}>
                <Card className="border-mauve/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Form Components</CardTitle>
                    <CardDescription>Interactive form elements with proper states and accessibility.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-text">Text Input</label>
                      <Input placeholder="Enter your name..." />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-text">Email Input</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-text">Select Dropdown</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-text">Textarea</label>
                      <Textarea placeholder="Write your message here..." rows={4} />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-text">Disabled Input</label>
                      <Input placeholder="Disabled input" disabled />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Cards & Spacing */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">Cards & Spacing</h2>
              <p className="text-brand-text/70">Card components and spacing scale for consistent layouts.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Cards */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-6">Card Variants</h3>
                <div className="space-y-6">
                  <motion.div variants={hoverScale}>
                    <Card className="border-mauve/20 hover:border-gold/30 hover:shadow-card transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="font-serif">Basic Card</CardTitle>
                        <CardDescription>Simple card with header and content.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-brand-text/70">
                          This is a basic card component with header and content sections.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={hoverScale}>
                    <Card className="border-gold/30 shadow-card">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="font-serif">Featured Card</CardTitle>
                            <CardDescription>Card with accent border and shadow.</CardDescription>
                          </div>
                          <Badge className="bg-gold text-white">Featured</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-brand-text/70">
                          Enhanced card styling for important content with badge and gold accent.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              {/* Spacing Scale */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-xl font-semibold text-brand-text mb-6">Spacing Scale</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-gold rounded"></div>
                    <span className="text-sm">4px (1) - xs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-4 bg-gold rounded"></div>
                    <span className="text-sm">8px (2) - sm</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-4 bg-gold rounded"></div>
                    <span className="text-sm">16px (4) - md</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-4 bg-gold rounded"></div>
                    <span className="text-sm">24px (6) - lg</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-4 bg-gold rounded"></div>
                    <span className="text-sm">32px (8) - xl</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-4 bg-gold rounded"></div>
                    <span className="text-sm">40px (10) - 2xl</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Animation Patterns */}
      <Section spacing="xl" className="bg-porcelain">
        <Container>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">Animation Patterns</h2>
              <p className="text-brand-text/70">Recommended animation patterns using framer-motion for consistent UX.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fade In Up */}
              <motion.div variants={fadeInUp}>
                <Card className="border-mauve/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">Fade In Up</CardTitle>
                    <CardDescription>Entry animation for content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="bg-gold/20 rounded-lg p-4 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24 }}
                    >
                      <p className="text-sm">Duration: 240ms</p>
                    </motion.div>
                    <code className="text-xs text-brand-text/60">
                      opacity: 0→1, y: 20→0
                    </code>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Hover Scale */}
              <motion.div variants={fadeInUp}>
                <Card className="border-mauve/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">Hover Scale</CardTitle>
                    <CardDescription>Interactive hover feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="bg-blush/50 rounded-lg p-4 mb-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm">Hover me!</p>
                    </motion.div>
                    <code className="text-xs text-brand-text/60">
                      scale: 1→1.05
                    </code>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stagger Children */}
              <motion.div variants={fadeInUp}>
                <Card className="border-mauve/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">Stagger Children</CardTitle>
                    <CardDescription>Sequential animation timing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={{
                        animate: {
                          transition: { staggerChildren: 0.06 }
                        }
                      }}
                      initial="initial"
                      animate="animate"
                      className="space-y-2 mb-3"
                    >
                      {[1, 2, 3].map(i => (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          className="bg-mauve/30 rounded p-2"
                        >
                          <p className="text-xs">Item {i}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                    <code className="text-xs text-brand-text/60">
                      staggerChildren: 60ms
                    </code>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Card className="border-gold/30 bg-gold/5">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">Animation Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-brand-text/70">
                    <li>• Use 240ms duration for content animations</li>
                    <li>• Use 60ms stagger delay between child elements</li>
                    <li>• Prefer easeOut easing for natural motion</li>
                    <li>• Respect prefers-reduced-motion for accessibility</li>
                    <li>• Keep hover animations under 200ms for responsiveness</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Separator />

      {/* Footer Note */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <div className="text-center">
            <p className="text-brand-text/60 text-sm">
              This styleguide uses only Tailwind CSS tokens - no inline hex colors. 
              All components follow WCAG accessibility guidelines.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
