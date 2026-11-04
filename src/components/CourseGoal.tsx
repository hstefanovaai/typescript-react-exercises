import { type PropsWithChildren } from "react";

// Variant 1 - PropsWithChildren

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  deleteGoal: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  deleteGoal,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => deleteGoal(id)}>Delete</button>
    </article>
  );
}

// Variant 2 - ReactNode

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// export default function CourseGoal(props: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         {props.children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// Variant 3 - FC - the type could be with children: ReactNode or PropsWithChildren, but ReactNode is more common
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;
