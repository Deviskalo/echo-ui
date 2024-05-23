import React from "react";

export type PropfOf<
  c extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<c, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends React.ElementType> = {
  /**
   *An override of the default HTML tag.
   *Can also be another React component.
   */
  as?: C;
};

/**
 * Allows for extending a set of props (`ExtendedProp`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the prps from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`c`) must be  passed in.
 */

export type InheritableElementProps<
  C extends React.ElementType,
  Props = {},
> = ExtendableProps<PropsOf<C>, Props>;

/**
 * A more sophisticated version of `InheritableelementProps` where
 * the passed in `as` prop will determine which props can be included.
 */

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
