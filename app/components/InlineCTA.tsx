/**
 * Inline CTA — embeds inside a section as the closing element.
 * Uses the brand's main button style so it integrates with the design,
 * not as a separate disconnected element.
 */
export default function InlineCTA({ text }: { text: string }) {
  return (
    <div className="mt-12 sm:mt-14 flex justify-center">
      <a href="#contact" className="btn-primary shine text-sm sm:text-base">
        <span>{text}</span>
        <span aria-hidden="true">←</span>
      </a>
    </div>
  );
}
